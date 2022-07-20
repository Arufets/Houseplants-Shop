package com.example.sklep_stephura.controller;

import com.example.sklep_stephura.entity.Offer;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import com.example.sklep_stephura.service.OfferServiceImpl;

import java.util.List;
@RestController
@RequestMapping("/offer")
@CrossOrigin
public class OfferController {
    @Autowired

    private final OfferServiceImpl offerServiceImpl;

    public OfferController(OfferServiceImpl offerServiceImpl) {
        this.offerServiceImpl = offerServiceImpl;
    }

    @GetMapping("/getOffers")
    public @ResponseBody List<Offer> listOffer() {
        return offerServiceImpl.getAllOffer();
    }

    @GetMapping("/getOffer/{id}")
    public @ResponseBody List<Offer> getOffer(@PathVariable("id") Integer id) {
        return offerServiceImpl.findByOfferId(id);
    }

    @GetMapping("/getUserOffers/{id}")
    public @ResponseBody List<Offer> getUserOffers(@PathVariable("id") Integer id) {
        return offerServiceImpl.findOfferByUserId(id);
    }

    @GetMapping("/getBuyerOffers/{id}")
    public @ResponseBody List<Offer> getBuyerOffers(@PathVariable("id") Integer id) {
        return offerServiceImpl.findOfferByBuyerId(id);
    }

    @GetMapping("/getBuyerPendingOffers/{id}")
    public @ResponseBody List<Offer> getBuyerPendingOffers(@PathVariable("id") Integer id) {
        return offerServiceImpl.findPendingOfferByBuyerId(id);
    }

    @PostMapping("/addOffer")
    public String addOffer(@RequestBody Offer offer) {
        try {
            offerServiceImpl.addOffer(offer);
        } catch (Exception ex) {
            String errorMessage = ex.getMessage();
            System.out.println(errorMessage);
        }
        return "New offer is added";
    }
    @PostMapping("/orderOffer/{id}")
    public String orderOffer(@PathVariable Integer id, @RequestBody Offer offer){
        try {
            offer.setId(id);
            offerServiceImpl.orderOffer(offer, id);
        } catch (Exception ex){
            String errorMessage = ex.getMessage();
            System.out.println(errorMessage);
        }
        return "User info edited";
    }

    @PostMapping("/acceptOffer/{id}")
    public String acceptOffer(@PathVariable Integer id, @RequestBody Offer offer){
        try {
            offer.setId(id);
            offerServiceImpl.acceptOffer(offer, id);
        } catch (Exception ex){
            String errorMessage = ex.getMessage();
            System.out.println(errorMessage);
        }
        return "Offer is accepted";
    }

    @PostMapping("/rejectOffer/{id}")
    public String rejectOffer(@PathVariable Integer id, @RequestBody Offer offer){
        try {
            offer.setId(id);
            offerServiceImpl.rejectOffer(offer, id);
        } catch (Exception ex){
            String errorMessage = ex.getMessage();
            System.out.println(errorMessage);
        }
        return "Offer is accepted";
    }

    @PostMapping("/deleteOffer/{id}")
    public String deleteOffer(@PathVariable Integer id){
        try {
            offerServiceImpl.deleteOffer(id);
        } catch (Exception ex){
            String errorMessage = ex.getMessage();
            System.out.println(errorMessage);
        }
        return "Offer is accepted";
    }
}
