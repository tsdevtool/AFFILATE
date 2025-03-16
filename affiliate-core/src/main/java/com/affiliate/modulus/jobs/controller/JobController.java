package com.affiliate.modulus.jobs.controller;

import com.affiliate.dto.ApiResponse;
import com.affiliate.modulus.jobs.dto.request.JobCreateRequest;
import com.affiliate.modulus.jobs.dto.response.JobResponse;
import com.affiliate.modulus.jobs.service.JobService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/job")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class JobController {
    JobService jobService;

    @PostMapping
    ApiResponse<JobResponse> create(@RequestBody JobCreateRequest request) {
        return ApiResponse.<JobResponse>builder()
                .data(jobService.createJob(request))
                .build();
    }

    @GetMapping("/{id}")
    ApiResponse<JobResponse> get(@PathVariable Long id) {
        return ApiResponse.<JobResponse>builder()
                .data(jobService.getJob(id))
                .build();
    }

    @GetMapping
    ApiResponse<List<JobResponse>> getAll() {
        return ApiResponse.<List<JobResponse>>builder()
                .data(jobService.getJobs())
                .build();
    }
}
