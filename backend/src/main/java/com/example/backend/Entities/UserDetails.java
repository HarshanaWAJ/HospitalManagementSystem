package com.example.backend.Entities;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Transactional
@Entity
@Table(name = "user_details")
public class UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(unique = true)
    private String username;
    private String password;
    private String role;
    @Column(unique = true)
    private String email;
    @Column(unique = true)
    private String tell;
    private String address;
}
