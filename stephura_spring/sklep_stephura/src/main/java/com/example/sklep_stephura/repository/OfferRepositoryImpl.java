package com.example.sklep_stephura.repository;

import com.example.sklep_stephura.entity.Offer;

import com.example.sklep_stephura.entity.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.util.List;


@Repository
@Transactional
public class OfferRepositoryImpl implements OfferRepository {
    @PersistenceContext
    private EntityManager em;
    @Override
    public List<Offer> getAllOffer(){
        return em.createNamedQuery("Offer.findAll").getResultList();
    }
    @Override
    public List<Offer> findByOfferId(Integer id){
        return em.createQuery("SELECT o FROM Offer o where o.id = :offerId").setParameter("offerId", id).getResultList();
    }
    @Override
    public List<Offer> findOfferByUserId(Integer id){
        return em.createQuery("SELECT o FROM Offer o WHERE o.customer.id =:customerId").setParameter("customerId", id).getResultList();
    }
    @Override
    public List<Offer> findOfferByBuyerId(Integer id){
        return em.createQuery("SELECT o FROM Offer o WHERE o.buyer.id =:buyer AND o.isPending = true AND o.isAccepted = true").setParameter("buyer", id).getResultList();
    }
    @Override
    public List<Offer> findPendingOfferByBuyerId(Integer id){
        return em.createQuery("SELECT o FROM Offer o WHERE o.buyer.id =:buyer AND o.isPending = true AND o.isAccepted = false").setParameter("buyer", id).getResultList();
    }
    @Override
    public Boolean addOffer(Offer offer){
        if(offer != null && offer.getId() == null){
            em.persist(offer);
            return true;
        }
        return false;
    }

    @Override
    public Offer getOfferById(Integer id){
        return em.find(Offer.class, id);
    }

    @Override
    public Boolean orderOffer(Offer offer, Integer id){
        Offer o  = getOfferById(id);
        if(offer != null && id !=null) {
            o.setIsPending(offer.getIsPending());
            o.setBuyer(offer.getBuyer());
            o.setPurchaseDate(offer.getPurchaseDate());
            em.persist(o);
            return true;
        }
        return false;
    }

    @Override
    public Boolean acceptOffer(Offer offer, Integer id){
        Offer o  = getOfferById(id);
        if(offer != null && id !=null) {
            o.setIsAccepted(offer.getIsAccepted());
            em.persist(o);
            return true;
        }
        return false;
    }

    @Override
    public Boolean rejectOffer(Offer offer, Integer id){
        Offer o  = getOfferById(id);
        if(offer != null && id !=null) {
            o.setIsAccepted(offer.getIsAccepted());
            o.setIsPending(offer.getIsPending());
            em.persist(o);
            return true;
        }
        return false;
    }

    @Override
    public Boolean deleteOffer(Integer id){
        Offer offer = getOfferById(id);
        if(offer != null){
            em.remove(offer);
        }
        return false;
    }
}
