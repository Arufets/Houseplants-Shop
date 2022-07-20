package com.example.sklep_stephura.repository;

import com.example.sklep_stephura.entity.Category;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class CategoryRepositoryImpl implements CategoryRepository{
    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Category> getAllCategory(){
        return em.createNamedQuery("Category.findAll").getResultList();
    }
}
