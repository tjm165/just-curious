Final answer: `' UNION select user, password FROM users #`

Resources

- [Examples of SQL Injection](https://www.pynt.io/learning-hub/owasp-top-10-guide/sql-injection-types-examples-prevention-cheat-sheet)
- [PortSwigger](https://portswigger.net/web-security/sql-injection)
- [SQL Injection Union Attacks](https://portswigger.net/web-security/sql-injection/union-attacks#determining-the-number-of-columns-required)

My thought process:

- This is easy mode. So I figure the web form is doing something like `"select * from users where id =" + id + ";"`
- The instructions say to escape the query. How can I do this? I think it's going to be a quote of some form
- Lesson 1: `admin'` --> `You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version  for the right syntax to use near ''admin''' at line 1`
- I clearly did something. Also I found out thye use MariaDB so that might come in handy.
- Lesson 2: With a little bit of research I found that if I do `bob' or 'a' = 'a` then I get all the data in the table. This is because we close off the string with `bob'` and then use `or` and a statement that is true. Note that this statement needs to end with that pesky quote that we had used to escape in the first place.
- `bob' OR 1=1; #` because we are commenting out the pesky quote. Note that in MariaDB (glad we found that out) you comment with `#` rather than `--` like I'm used to.
- Now how do we get the passwords? I think if we do a union and then label the passwords as one of the user's schema fields.
- This [article](https://portswigger.net/web-security/sql-injection/union-attacks#determining-the-number-of-columns-required) on SQL UNION injections became very handy
- Lesson 3: Enumerate how many columns the query is returning by using `' ORDER BY 1 #` ... `ORDER BY 1000 #`. I found that this column has only two columns. Edit: I guess there were easier ways to find this but I'm glad I learned something
- Based on info from before, I think this means the password will be in a different table. But how can I verify this?
- `' UNION select TABLE_NAME, NULL FROM INFORMATION_SCHEMA.TABLES #` --> This produced A TON of data. But no passwords table
- `' UNION select COLUMN_NAME, NULL FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'users' #` --> Looks like the users table has 8 rows. One of them is password. Now this is easy.
- - `' UNION select user, password FROM users #` --> DONE!
