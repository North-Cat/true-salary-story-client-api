const config = require('config');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const User = require('models/User');
const Point = require('models/Point');

passport.use(
  new GoogleStrategy(
    config.passport.google,
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if the user already exists in the database.
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // If the user doesn't exist, create a new user.
          user = await User.create({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            profilePicture: profile.photos[0].value,
            loginTimestamp: new Date(),
          });
          // Also create an associated Point record for the new user.
          const point = await Point.create({
            user: user._id,
          });
          // Link the user to the Point record.
          user.points = point;
          await user.save();
        } else {
          // Update the login timestamp for the existing user.
          user.loginTimestamp = new Date();
          await user.save();
        }

        // Create a JSON Web Token (JWT) for the user.
        const token = jwt.sign({ id: user.id }, config.jwtSecret, {
          expiresIn: '1h',
        });

        // Add the token to the user object.
        user.token = token;

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

module.exports = passport;
