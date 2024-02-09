package com.example.backend.DTO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class User_Details_DTO {
    private int id;
    private String username;
    private String password;
    private String role;
    private String email;
    private String tell;
    private String address;
    private String user_full_name;
}

