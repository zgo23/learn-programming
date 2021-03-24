# General

- [Difference Between SQL Server Logins and Database Users](https://www.top-password.com/blog/difference-between-sql-server-logins-and-database-users/)
- [Introduction to SQL Server Security — Part 1](https://www.red-gate.com/simple-talk/sysadmin/data-protection-and-privacy/introduction-to-sql-server-security-part-1/)

## Principal

- User
- Group
- Role
- Login

## Role

### Application Role

- An application role is a special kind of user-defined database role.

## Permissions

### Object Permissions

### Schema Permissions

### Database Permissions

- Create table
- Create view
- Create type

### Server Permissions

## Transparent Data Encryption (TDE)

## Always Encrypted

# Script to create a login, user and schema

```sql

-- use master;
-- go
-- create login jba_pms_user with PASSWORD = 'MgHc09100627';
-- go

use PracticeDB;
go
create user jba_pms_user from login jba_pms_user with default_schema = jba_pms_user;
go
create schema jba_pms_user AUTHORIZATION jba_pms_user;
go
EXEC sp_addrolemember 'db_ddladmin', 'jba_pms_user';
EXEC sp_addrolemember 'db_datareader', 'jba_pms_user';
EXEC sp_addrolemember 'db_datawriter', 'jba_pms_user';
go
```
