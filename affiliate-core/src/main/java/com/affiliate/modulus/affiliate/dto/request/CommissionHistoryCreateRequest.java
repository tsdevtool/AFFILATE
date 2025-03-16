package com.affiliate.modulus.affiliate.dto.request;

import com.affiliate.modulus.affiliate.entity.Affiliate;
import com.affiliate.modulus.affiliate.entity.CommissionRule;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Data
@Builder
public class CommissionHistoryCreateRequest {
    private Affiliate affiliate;
    private CommissionRule commissionRule;
    private BigDecimal amount;
}
