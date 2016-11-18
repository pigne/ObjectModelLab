import expect from 'expect';

//importation de la classe data
import  { data }  from './sensors_data'

//importation des classe du modele d'index
import { Data, TimeSeries, Datum , Sensor, indiceerature, Humidity ,Light , Door, FanSpeed  } from '../../src/model/index';

//importation de la classe du decodage des donnees
import { decoding } from '../../src/model/decoding';

//decodage
var DataDecoded = decoding(data);

//testes sur les capteurs et sur l intégrité des données
describe('Tests du modèle des capteurs', () => {
	    					it('le type de l identifiant ', () => { 
	    						for (let indice = 0; indice < DataDecoded[0].length; indice++) {
									        var t = DataDecoded[0][indice];
									        expect(t.Id).toBeA('string');
	    						}
	    					});

						    it('test du nom', () => {
						      for (let indice = 0; indice < DataDecoded[0].length; indice++) {
						        var t = DataDecoded[0][indice];
						        expect(typeof (t.Name)).toEqual('string');
						      }
						    });

						    it('test du type', () => {
						      for (let indice = 0; indice < DataDecoded[0].length; indice++) {
						        var t = DataDecoded[0][indice];
						        expect(typeof (t.Type)).toEqual('string');
						      }
						    });
	});

describe('Testes d intégrité des données', () => {
	    it('test des valeurs nombres ', () => {
	      for (let i = 0; i < DataDecoded[1].length; i++) {
	        var t = DataDecoded[1][i];
	        if (t.constructor.name === 'Datum') {
	          expect(typeof (t.Value)).toEqual('number');
	        }
	      }
	    });

	    it('test du Labels', () => {
	      for (let i = 0; i < DataDecoded[1].length; i++) {
	        var t = DataDecoded[1][i];
	        if (t.constructor.name === 'TimeSeries') {
	          for (let l = 0; l < t.labels.length; l++) {
	            expect(typeof (t.Labels[l])).toEqual('string');
	          }
	        }
	      }
	    });

	    it('test des Valeurs nombres', () => {
	      for (let i = 0; i < DataDecoded[1].length; i++) {
	        var t = DataDecoded[1][i];
	        if (t.constructor.name === 'TimeSeries') {
	          for (let l = 0; l < t.values.length; l++) {
	            expect(typeof (t.Values[l])).toEqual('number');
	          }
	        }
	      }
	    });
	 });
	