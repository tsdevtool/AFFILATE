package com.affiliate.modulus.jobs.entity;


import com.affiliate.entity.BaseEntity;
import com.affiliate.modulus.auth.entity.User;
import com.affiliate.modulus.jobs.utils.ApplicationStatus;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.FieldDefaults;

@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
@EqualsAndHashCode(callSuper = true)
public class JobApplication extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @JoinColumn(name = "job_id")
    Job job;

    String resumeUrl;
    String coverLetter;
    ApplicationStatus status;
}
