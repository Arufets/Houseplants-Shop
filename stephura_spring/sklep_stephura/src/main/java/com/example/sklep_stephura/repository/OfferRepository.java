package com.example.sklep_stephura.repository;

import com.example.sklep_stephura.entity.Offer;

import java.util.List;

public interface OfferRepository{
    List<Offer> getAllOffer();
    List<Offer> findByOfferId(Integer id);
    List<Offer> findOfferByUserId(Integer id);
    List<Offer> findOfferByBuyerId(Integer id);
    List<Offer> findPendingOfferByBuyerId(Integer id);
    Boolean addOffer(Offer offer);
    Offer getOfferById(Integer id);
    Boolean orderOffer(Offer offer, Integer id);
    Boolean acceptOffer(Offer offer, Integer id);
    Boolean rejectOffer(Offer offer, Integer id);
    Boolean deleteOffer(Integer id);
}
