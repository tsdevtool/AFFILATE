package com.affiliate.modulus.jobs.entity;

import com.affiliate.entity.BaseEntity;
import com.affiliate.modulus.jobs.utils.JobType;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.FieldDefaults;

@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
@EqualsAndHashCode(callSuper = true)
public class Job extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String title;
    String location;
    String description;
    String salary;
    JobType jobType;

    @ManyToOne
    @JoinColumn(name = "company_id")
    Company company;
}
