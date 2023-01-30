"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Inputsearch(props) {
  //on créé un state où l'on stockera 2 index avec les 2 recherches par exemple nom et prénom ou l'inverse
  const [stateInput, setStateInput] = (0, _react.useState)([]);
  /*dans le premier tableau on stockera le resultat de recherche avec le premier index du stateInput
  puis dans le deuxieme tableau on stockera le resultat du deuxieme index avec une recherche effectué sur les
  elements du newArrayData (premier tableau)*/
  let newArrayData = [];
  let newArrayData2 = [];
  (0, _react.useEffect)(() => {
    /*a chaque ecoute de onChange on videra les 2 tableaux pour ne pas avoir des doublons*/
    newArrayData = [];
    newArrayData2 = [];
    /*donc avec le state dans le premier index (recherche du prenom par exemple mais ca pourrait etre aussi le nom)
    on cherche dans la liste des nos employees si on a des lignes qui correspondent à notre recherche
    par contre on fait cette premiere recherche seulement la premiere fois donc si le deuxieme index donc 1 est undefined
    ou meme si est vide (quand on tape espace pour mettre la deuxieme recherche)*/
    (stateInput[1] === undefined || ' ') && props.data.users.map(item => {
      const obj = Object.values(item);
      obj.map(item2 => {
        if (stateInput.length !== 0 && item2.includes(stateInput[0])) {
          if (newArrayData.includes(item) == false) {
            newArrayData.push(item);
          }
        }
      });
    });
    /*voilà une fois qu'on tape le deuxieme mots de recherche dans l'input, c'est le deuxieme index de stateInput qui est rempli avec cette valeur
    donc different de undefined et si sa length est majeur de 1 donc pas de espace.
    Alors on fera une recherche avec ce deuxieme mot sur le tableau deja trié avec la premiere recherche donc pour
    afficher les lignes qui ont à la fois la premiere recherche index 1 de stateinput et la deuxieme recherche donc 
    index 2 de notre stateInput*/
    stateInput[1] !== undefined && stateInput[1].length > 0 && newArrayData.map(item => {
      const obj = Object.values(item);
      obj.map(item2 => {
        if (item2.includes(stateInput[1])) {
          if (newArrayData2.includes(item) == false) {
            newArrayData2.push(item);
          }
        }
      });
    });
    /*si stateinput est vide donc input de recherche vide alors on videra les 2 tableaux de recherche et on affiche 
    toutes les lignes des employees*/
    if (stateInput === []) {
      newArrayData = [];
      newArrayData2 = [];
    }
    /*donc si le tableau avec la deuxieme recherche n' pas de valeur on dispatchera vers le store de redux le resultat
    de la premiere recherche (affichage dynamique)
    Sinon si on a une deuxieme recherche on stockera dans le store le resultat de la deuxieme recherche*/
    if (newArrayData2.length === 0 || stateInput[1] == ' ') {
      props.dataEmployeesFiltered(newArrayData);
    } else {
      props.dataEmployeesFiltered(newArrayData2);
    }
  }, [stateInput]);
  function Changeinput(e, event) {
    /*on commence par une condtion qui nous mene vers la page 1 de notre système de pagination
    car si jamais on est sur aune autre page la recherche ne fonctionnera pas*/
    if (props.data.pageIndex > 0) {
      props.updatePage(event, 0);
    }
    /*si on a un espace on split la deuxieme recherche (ou troisieme etc), vers un tableau pour avoir 
    pour chaque recherche uin index de notre tableau stateInput*/
    setStateInput(e.split(' '));
  }
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Search : "), /*#__PURE__*/_react.default.createElement("input", {
    onChange: e => Changeinput(e.target.value, e),
    className: "input-search",
    type: "search"
  }));
}
var _default = Inputsearch;
exports.default = _default;