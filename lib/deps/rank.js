/**
 * Module dependencies
 */
var Hash = require('./core_ext/hash').Hash,
  Attributs = require('./attributs').Attributs;

/**
 * Create a new rank
 * @constructor
 * @param {Graph} graph Parent Graph
 * @param {String} type The rank type
 * @param {String} value The rank value
 * @return {Rank}
 * @api public
 */
var Rank = (exports.Rank = function (graph, type, value) {
  this.relativeGraph = graph;
  this.type = type;
  this.value = value;
});

/**
 * @api private
 */
Rank.prototype.to_dot = function () {
  var nodeOutput = '{rank = ' + this.type + '; ' + this.value + '}';
  return nodeOutput;
};
