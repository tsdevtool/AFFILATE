package com.affiliate.modulus.jobs.dto.response;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class JobApplicationResponse {
    Long id;
    JobResponse job;
    String resumeUrl;
    String coverLetter;
    String status;
}
