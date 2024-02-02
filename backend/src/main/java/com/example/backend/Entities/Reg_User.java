package com.example.backend.Entities;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.*;

import java.util.List;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Transactional
@Table(name = "reg_users")
public class Reg_User extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reg_no;
    @Column(unique = true)
    private String user_name;
    private String user_password;

    //Map to role_id to Registered User
    @ManyToOne
    @JoinColumn(name = "role_id")
    private User_Roles userRole;
}
