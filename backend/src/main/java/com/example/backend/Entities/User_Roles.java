package com.example.backend.Entities;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@Transactional
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "user_roles")
public class User_Roles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int role_id;
    @Column(unique = true)
    private String role_name;
    private String role_description;
    @Transient
    Date date = new Date();//Not a Column
    @Transient
    long createdDate = date.getTime(); //Not a Column
    Date actualDate = new Date(createdDate);
    @Transient
    SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss"); //Not a Column
    String formattedDate = formatter.format(actualDate);


}
