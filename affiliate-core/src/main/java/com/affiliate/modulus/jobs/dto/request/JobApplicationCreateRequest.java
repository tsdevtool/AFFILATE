package com.affiliate.modulus.jobs.dto.request;

import lombok.Data;

@Data
public class JobApplicationCreateRequest {
    Long jobId;
    String resumeUrl;
    String coverLetter;
}
