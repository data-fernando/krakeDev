package com.reto21.servicios;

import java.util.ArrayList;

import com.reto21.entidades.Carta;
import com.reto21.entidades.Jugadores;
import com.reto21.entidades.Naipe;
import java.util.HashMap;
import java.util.Map;

public class Juego {
	
    private Naipe naipe = new Naipe();
    private ArrayList<String> jugadores;
    
    private Map<String, ArrayList<Carta>> cartasPorJugador = new HashMap<>();

    public Juego(ArrayList<String> jugadores) {
        this.jugadores = jugadores;
        for (String jugador : jugadores) {
        	///edita y agrega valores en el hash Map
            cartasPorJugador.put(jugador, new ArrayList<>());
        }
    }

    public void entregarCartas(int cantidad) {
        ArrayList<Carta> baraja = naipe.barajar();
        int index = 0;

        for (int i = 0; i < cantidad; i++) {
            for (String jugador : jugadores) {
                if (index < baraja.size()) {
                    cartasPorJugador.get(jugador).add(baraja.get(index));
                    index++;
                }
            }
        }
    }

    public int devolverTotal(int posicionJugador) {
        if (posicionJugador >= jugadores.size()) return 0;

        String jugador = jugadores.get(posicionJugador);
        ArrayList<Carta> cartas = cartasPorJugador.get(jugador);
        int total = 0;
        for (Carta carta : cartas) {
            total += carta.getValor(); // Asegúrate de que Carta tenga getValor()
        }
        return total;
    }

    public String determinarGanador() {
        String ganador = "";
        int maxPuntaje = -1;

        for (int i = 0; i < jugadores.size(); i++) {
            int total = devolverTotal(i);
            if (total > maxPuntaje) {
                maxPuntaje = total;
                ganador = jugadores.get(i);
            }
        }

        return ganador;
    }
	

}
