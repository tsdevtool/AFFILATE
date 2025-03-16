package com.affiliate.modulus.affiliate.mapper;

import com.affiliate.modulus.affiliate.dto.response.AffiliateResponse;
import com.affiliate.modulus.affiliate.entity.Affiliate;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AffiliateMapper {
    AffiliateResponse toResponse(Affiliate affiliate);
}
