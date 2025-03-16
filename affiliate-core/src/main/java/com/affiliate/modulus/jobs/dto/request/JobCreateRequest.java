package com.affiliate.modulus.jobs.dto.request;

import com.affiliate.modulus.jobs.utils.JobType;
import lombok.Data;

@Data
public class JobCreateRequest {
    String title;
    String location;
    Long companyId;
    String description;
    String salary;
    JobType jobType;
}
