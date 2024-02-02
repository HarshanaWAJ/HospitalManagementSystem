package com.example.backend.DTO;

import lombok.*;

import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User_Role_DTO {
    private int role_id;
    private String role_name;
    private String role_description;
    private Date date = new Date();
    long createdDate = date.getTime();
    Date actualDate = new Date(createdDate);
    SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
    String formattedDate= formatter.format(actualDate);
}
