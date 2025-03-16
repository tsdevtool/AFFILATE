package com.affiliate.modulus.affiliate.service;

import com.affiliate.modulus.affiliate.dto.request.TrackReferralRequest;
import com.affiliate.modulus.affiliate.dto.response.AffiliateResponse;
import com.affiliate.modulus.affiliate.entity.Affiliate;
import com.affiliate.modulus.auth.entity.User;

public interface AffiliateService {
    void createAffiliate(User user, String referralCode);
    AffiliateResponse getMyAffiliate();
    AffiliateResponse getAffiliateByUserId(String userId);
    boolean trackReferral(TrackReferralRequest request);
}
