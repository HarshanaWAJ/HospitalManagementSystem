use hospital_management;

/* Role Table */
select * from user_roles;

UPDATE user_roles
SET role_name = "USER_ADMIN", role_description = "Admin Permisstions"
WHERE role_id=4;

/* Reg_User Table */
SELECT * FROM reg_users;

/* Get Users With Role Name*/
SELECT u.reg_no, u.first_name, u.last_name, u.gender, u.user_address,u.user_age, u.user_contact, u.user_email, u.user_emergency_contact, user_roles.role_name
FROM reg_users u
INNER JOIN user_roles ON u.role_id = user_roles.role_id;

SELECT DISTINCT role_id FROM reg_users;
SELECT DISTINCT role_id FROM user_roles;
