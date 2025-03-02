package com.affiliate.modulus.affiliate.service;

import com.affiliate.modulus.affiliate.dto.request.TrackReferralRequest;
import com.affiliate.modulus.affiliate.entity.Affiliate;

public interface AffiliateService {
    Affiliate createAffiliate(String userId);
    Affiliate getAffiliateByUserId(String userId);
    boolean trackReferral(TrackReferralRequest request);
}
