package com.example.backend.DTO;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Reg_User_DTO {
    private String first_name;
    private String last_name;
    private String user_address;
    private String gender;
    private int reg_no;
    private String user_name;
    private String user_password;
    private int user_age;
    private String user_email;
    private String user_contact;
    private String user_emergency_contact;
    private int role_id=1;
}
