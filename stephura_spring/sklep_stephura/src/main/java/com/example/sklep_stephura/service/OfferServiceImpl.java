package com.example.sklep_stephura.service;

import com.example.sklep_stephura.entity.Offer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.sklep_stephura.repository.OfferRepositoryImpl;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class OfferServiceImpl implements OfferService{
    @Autowired
    private OfferRepositoryImpl offerRepository;

    @Override
    public List<Offer> getAllOffer() {
        return offerRepository.getAllOffer();
    }

    @Override
    public List<Offer> findByOfferId(Integer id){
        return offerRepository.findByOfferId(id);
    }

    @Override
    public List<Offer> findOfferByUserId(Integer id) { return  offerRepository.findOfferByUserId(id);}
    @Override
    public List<Offer> findOfferByBuyerId(Integer id) { return offerRepository.findOfferByBuyerId(id);}
    @Override
    public List<Offer> findPendingOfferByBuyerId(Integer id) { return offerRepository.findPendingOfferByBuyerId(id);}
    @Override
    public Boolean addOffer(Offer offer){ return offerRepository.addOffer(offer);}
    @Override
    public Offer getOfferById(Integer id){
        return offerRepository.getOfferById(id);
    }
    @Override
    public Boolean orderOffer(Offer offer, Integer id) {
        return offerRepository.orderOffer(offer, id);
    }
    @Override
    public Boolean acceptOffer(Offer offer, Integer id) {
        return offerRepository.acceptOffer(offer, id);
    }
    @Override
    public Boolean rejectOffer(Offer offer, Integer id) {
        return offerRepository.rejectOffer(offer, id);
    }
    @Override
    public Boolean deleteOffer(Integer id) {
        return offerRepository.deleteOffer(id);
    }
}
