package com.example.sklep_stephura.controller;

import com.example.sklep_stephura.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.sklep_stephura.service.CategoryServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {
    @Autowired

    private final CategoryServiceImpl categoryServiceImpl;

    public CategoryController(CategoryServiceImpl categoryServiceImpl) {
        this.categoryServiceImpl = categoryServiceImpl;
    }

    @GetMapping("/getCategories")
    public @ResponseBody List<Category> listOffer(){
        return categoryServiceImpl.getAllCategory();
    }
}