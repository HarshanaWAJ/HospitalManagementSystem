use hospital_management;

/* Role Table */
select * from user_roles;

UPDATE user_roles
SET role_name = "USER_ADMIN", role_description = "Admin Permisstions"
WHERE role_id=4;

/* Reg_User Table */
SELECT * FROM user_details;

