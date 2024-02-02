package com.example.backend.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.*;


@MappedSuperclass
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public abstract class User {
    protected String first_name;
    protected String last_name;
    protected String user_address;
    protected String gender;
    protected  int user_age;
    @Column(unique = true)
    protected String user_email;
    protected String user_contact;
    protected String user_emergency_contact;
}
