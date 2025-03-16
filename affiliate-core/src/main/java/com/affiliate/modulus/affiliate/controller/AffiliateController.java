package com.affiliate.modulus.affiliate.controller;

import com.affiliate.dto.ApiResponse;
import com.affiliate.modulus.affiliate.dto.request.TrackReferralRequest;
import com.affiliate.modulus.affiliate.dto.response.AffiliateResponse;
import com.affiliate.modulus.affiliate.service.AffiliateService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/affiliate")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class AffiliateController {
    AffiliateService affiliateService;

    @GetMapping("/my-affiliate")
    ApiResponse<AffiliateResponse> getMyAffiliate() {
        return ApiResponse.<AffiliateResponse>builder()
                .data(affiliateService.getMyAffiliate())
                .build();
    }

    @PostMapping("/track-referral")
    ApiResponse<?> trackReferral(@RequestBody TrackReferralRequest request) {
        affiliateService.trackReferral(request);
        return ApiResponse.builder().build();
    }
}
