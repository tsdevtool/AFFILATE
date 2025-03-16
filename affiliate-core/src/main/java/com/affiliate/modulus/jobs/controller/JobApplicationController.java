package com.affiliate.modulus.jobs.controller;

import com.affiliate.dto.ApiResponse;
import com.affiliate.modulus.jobs.dto.request.JobApplicationCreateRequest;
import com.affiliate.modulus.jobs.dto.response.JobApplicationResponse;
import com.affiliate.modulus.jobs.service.JobApplicationService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/job-application")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@SecurityRequirement(name = "bearerAuth")
@Slf4j
public class JobApplicationController {
    JobApplicationService jobApplicationService;

    @PostMapping
    ApiResponse<JobApplicationResponse> apply(@RequestBody JobApplicationCreateRequest request) {
        return ApiResponse.<JobApplicationResponse>builder()
                .data(jobApplicationService.applyJob(request))
                .build();
    }

    @GetMapping("/{id}")
    ApiResponse<JobApplicationResponse> get(@PathVariable Long id) {
        return ApiResponse.<JobApplicationResponse>builder()
                .data(jobApplicationService.getJobApplication(id))
                .build();
    }

    @GetMapping
    ApiResponse<List<JobApplicationResponse>> getAll() {
        return ApiResponse.<List<JobApplicationResponse>>builder()
                .data(jobApplicationService.getJobApplications())
                .build();
    }
}
