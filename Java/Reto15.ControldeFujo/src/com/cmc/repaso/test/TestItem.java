package com.cmc.repaso.test;
import com.cmc.repaso.entidades.Item;

public class TestItem {

	public static void main(String[] args) {
		System.out.println("\nValor inicial\n");
        Item item1 = new Item("Camisa", 10);
        item1.imprimir();
		System.out.println("\nModificando\n");


        item1.vender(3);
        System.out.println("Despues de vender 3:");
        item1.imprimir();

        item1.devolver(2);
        System.out.println("Despues de devolver 2:");
        item1.imprimir();



    }


}
