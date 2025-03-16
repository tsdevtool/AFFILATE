package com.affiliate.modulus.jobs.service;

import com.affiliate.modulus.jobs.dto.request.JobApplicationCreateRequest;
import com.affiliate.modulus.jobs.dto.response.JobApplicationResponse;

import java.util.List;

public interface JobApplicationService {
    JobApplicationResponse applyJob(JobApplicationCreateRequest request);
    JobApplicationResponse getJobApplication(Long id);
    List<JobApplicationResponse> getJobApplications();
//    JobApplicationResponse updateJobApplication(Long id, JobApplicationCreateRequest request);
//    void deleteJobApplication(Long id);
}
