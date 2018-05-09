/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
	document.getElementById("ajusteArmazenamentoLocal").addEventListener("click",ajustarArmazenamentoLocal);
	document.getElementById("MostrarArmazenamentoLocal").addEventListener("click",mostrarArmazenamentoLocal);
	document.getElementById("removeArmazenamentoLocal").addEventListener("click",removerArmazenamentoLocal);
	document.getElementById("pegarArmazenamentoLocal").addEventListener("click",pegarAmazenamentoLocal);
	var localStorage = window.localStorage;
	
	function ajustarArmazenamentoLocal(){
		localStorage.setItem("Nome","Marcos");
		localStorage.setItem("Profissão","Programador");
		localStorage.setItem("Projeto","Aplicativo de Armazenamento Local");
		
	}
	/*function mostrarArmazenamentoLocal(){
		console.log(localStorage.getItem("Nome"));
		console.log(localStorage.getItem("Profissão"));
		console.log(localStorage.getItem("Projeto"));
		
	}
	*/
	function removeArmazenamentoLocal(){
		armazenamentoLocal.removeItem("Projeto");
		
	
	}
	
	function pegarArmazenamentoLocal(){
		var novaJanela = window.open();
		novaJanela.document.open();
		novaJanela.document.write("<h1> Item Resgatado</h1>");
		
		novaJanela.document.write(armazenamentoLocalKey(0));
		novaJanela.document.close();
	
	}
	function mostrarArmazenamentoLocal(){
		var novaJanela = window.open();
		novaJanela.document.open();
		
		novaJanela.document.write("<h1> Lista de Contatos </h1>");
		novaJanela.document.write("<br>");
		novaJanela.document.write(localStorage.getItem("Nome"));
		novaJanela.document.write("<br>");
		novaJanela.document.write(localStorage.getItem("Profissão"));
		novaJanela.document.write("<br>");
		novaJanela.document.write(localStorage.getItem("Projeto"));
		
		novaJaneladocument.close();
			
	}
	
		
