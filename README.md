# True Salary Story(Client API)

## Project Structure

```markdown
true-salary-story-client-api/
├── src/
│ ├── config/
│ │ ├── pay
│ │ │ ├── linePay.js
│ │ ├── database.js
│ │ ├── index.js
│ │ ├── passport.js
│ ├── middleware/
│ │ ├── errorHandler.js
│ │ ├── jwtAuthMiddleware.js
│ ├── models/
│ │ ├── Company.js
│ │ ├── Keyword.js
│ │ ├── Point.js
│ │ ├── PointHistory.js
│ │ ├── Post.js
│ │ ├── Salary.js
│ │ ├── Transaction.js
│ │ ├── User.js
│ ├── routes/
│ │ ├── pay
│ │ │ ├── linePay.js
│ │ ├── account.js
│ │ ├── auth.js
│ │ ├── company.js
│ │ ├── index.js
│ │ ├── order.js
│ │ ├── point.js
│ │ ├── public.js
│ │ ├── salary.js
│ │ ├── social.js
│ │ ├── user.js
│ ├── app.js
├── .env
```

## How to generate JWT_SECRET

```bash
openssl rand -base64 32
```
