(this["webpackJsonpreact-rock-paper-scissors-app"]=this["webpackJsonpreact-rock-paper-scissors-app"]||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var s=t(1),A=t.n(s),a=t(4),n=t.n(a),i=(t(9),t(2)),r=(t(10),t(0)),o=function(e){var c=e.userScore,t=e.compScore;return Object(r.jsxs)("div",{className:"score-board",children:[Object(r.jsx)("div",{id:"user-label",className:"badge",children:"user"}),Object(r.jsx)("div",{id:"comp-label",className:"badge",children:"comp"}),Object(r.jsx)("span",{id:"user-score",children:c}),":",Object(r.jsx)("span",{id:"comp-score",children:t})]})},d=function(e){var c=e.result;return Object(r.jsx)("div",{className:"result",children:Object(r.jsx)("p",{children:c})})},l=function(e){var c=e.setUserChoice,t=e.setCounter,s=e.counter,A=function(e){e.preventDefault(),c(e.target.id),t(s+1)};return Object(r.jsxs)("div",{className:"choices",children:[Object(r.jsx)("div",{onClick:A,className:"choice",id:"r",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACuElEQVRoge2YP0wUQRSHv7llkUOQgwIqEoTYGRNzwd5aSytsrDRqYgCjxqiwxqAWKjZ2xsYgCbUxIRaaWMLFxmg0aDQ2SkDhkDvuz+7YYLzc7sHM7K7BZL/q5t17896799ub3YWEhISEhIT/GBHHpvKF00I7E8AQIIEndHRdEfvOlaLO1RT1hgC0cQsYrrGcJ/8jBYxGnSrUBOTMjMXA25tITgJFEHfJjt8j53wDuuvcv7NGX9STCTeBgXdXkVzcXGVA3iHnSK9U7k7taq737oljMinTQACkPBVgHank14L9BUP+PQJsGoST0Lwjg+zrHz+ze6DPZ3eLG1jpFn/AGmlTacVyEXulMl6pTL2MKiv54AZCSCuchLYgSEbV1TzS83x2d71wwmdUlFZsDVQDGpCeR3XVby8tLWcCtuhRyRNLA1ZrGmFZgd9VVlZ9NrdQxC0UjXLFcg209vUG2q3WdMOY0uJSw7itiOckboBJY9th1EBhdrSXX/mXxlnrMPnl/6B9DWw8O3va+7n8qbpe6DfOGiFaDcicM+wWNh545co/ld5WKDcg569fQjJpd3bEcgtuilIDcs45BvI2gL2nHWHvmAEoTkBw+e9ngZ3piKsebVQltLd20dyZgVRsh7gWqlW8qV2IJgu7vS2GcvRRlJCYqDfZXTtDRkoNiOz4LDBda7PS5qenIssqTupCtjgDfDWtxgClXMoNiIPOCiJ1HPDf0MeB5LmKm9ZficiOvQImjQrSQ0Jqens3k+eBrHMByX3tOB0kU2Jw7LWKq3YDQiDFoDMC3NAuTI0FvObh7d026wmTSeaco0geovj4p8AHBEdE1llQDQh1nIqs8xSbAwgeA26IrVwEj6DlkE7xEOHLXTnn9G++uDoM7Ac6AbuRO7AIfAFmkdaUGLz2PqpaEhISEhIS/ht+AxYUxb9QxKFRAAAAAElFTkSuQmCC",alt:"",id:"r"})}),Object(r.jsx)("div",{onClick:A,className:"choice",id:"p",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD6UlEQVRoge2ZT2wbRRTGf7O2gx2Sxjg0jRocKBUnDlSKSxBwCBUcWgmJE1VzKUigXhBKCHAppOtKUIkCB45w4I8CSDnBBQhECC5wSNJLpUiUUxulaSTSNo5C6/XuPg6JIKpnx971bqgg38l+OzPve/O992bHhh3s4P8NleTi8sv7OTKVt1EcA3yECfKFN9UDL1fj8pGOayEt7qi8Q7b4EoWnAIGV6de4vgDwelwuYlFAJidT7J8/i/AC8CfwLgP2e8zZf9B3vEC6a2OguwqLn15mjf108hYwDAjwBV2Fk1GUiUeB++fHyRZHN3e6k5Xps8yVBaTAzSVobwNRUF0G6KGDM2SLI3Q/CSi4Oj1G5ZIFvBLWdTwKzNpL9B3vvWWnLwL3aoa7+P417nluN5n8pmUNFj9eViW7N6zvuGqgV7PTfeJ5qFSqbrBfc3dbzmVItYFY4CwD7IniOC4FRGN2vRs306lcts7urq2n05131s9YIxe2NhLtQr7joAkA363pJ3RwhlxxZEvXGqOyYKwNKyauWviOnqgE2FEyTOEQpDsg3Qndh0AYNvlIVAFxHK3dd1y9vVrrsXRdy4BkU6gaoEBACvmOg7XyPaw07yPZFKoFKRAcQFgkGoB4PuJ5GruH+PX2IMVMSDQAMBVyfR341dtMAQgm5dfqAwtIId0Z8zeSD0BDNMgunqdNORMSDyColepSCMIX8jakUIACQa00ZCFvQwqFPMzqFTDWQJIHWTrVngv0KYGBhUuhRE/i9vuKWntAYIC2a9W/j29BsnfiAAQFBgqp3Zpaxgz6dwIIQnbvntA3lNsqgEx+V+g5DQOQufKLiLwB7EKYQmVGVenkUhSCScDYRmWufBSxPiQ/2E/P03k6HzwKtXNy7vRD20WwUU6ZzwGRce56DLoGIbcPuodAWb34/k8yaz8eJ82oaHSQ9ZPd+8+31VkQHyAPTMlM+XBy1DYh5i7UQAHOU13c+Lw+D6szW5+2o+RrmSkfa41hAyjVwklscZprv37D+u+K6hXdiAxKJlqg1wyMr6dGBdSA/R3ijlC9YtqFxN+nTGjoXJXsD1DqBOBvAx8djFf8pnZPDZz6COF5GsiZCIQF0+Om5VcH7c9QDAPhb96tQPGD6XGo/FUD9iTwLBD+9h0NPlhfmgaELkBVsr9C1DPAjci0mseEKo2fNw2I1EHUwVPf4luHgeuRaDWHCziMNhoUuQWqh8d/xkofAH6MuoYBv0HqiHrUvtqQRxzeZMY+guJVYKjFNV3gE1zG1CN2pZkJsf7NKrN2P6gnQIaAA2z8snw30BY0BVgGLgJTeHyuBu0LcXLawQ7+6/gLI49y6NH5VIYAAAAASUVORK5CYII=",alt:"",id:"p"})}),Object(r.jsx)("div",{onClick:A,className:"choice",id:"s",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEVUlEQVRoge2Y22scVRzHP7+Z3dlLmouTGlokIooXahUaIqjoQ0si+KK+WDAG8R8wIOINjZ2AvvVZxBcLTWrJgwk+iDfwRXzpKgilFrQaJShtc+lms7uzs5fjw3Y3687szsxmRYT5wL6c8/ud/X5nzvmd3y5ERERERET8j5FektSFhScR9RZwFCghLJHkDbnfcvorz59QBtR3lonBB8CzHiud58qRWTl5shpWhPrRGqPMFIophEeAGiJnmDh1WgTVLTewAXVhYRpRHwG3dQk7x69HXvAzoTJWGpHHUWoamAIe7KBlXiatd7ut5WtAfWPFGOQ0MBckHg8TanlZ547LE2hqCtQ08CiQCLDWukxa490CugpSy8s6d146CzwX4MtaOUeVBTQ5jqgp4ARghlwD4LpMWmPdAmKdJpRCyFw6Q3jxADNK1Iz0VCL+wXm/AK3jzPeWhTDb81crRc0JfZ4b2Cg+ZNh81S/Q8xmpjPUM8Emn+aCUtvIkzIGg4bvA58AKOp/JMetGkCTXFlIZKw28TxDxSlHaLnQUWS2U/Xb+BsKnIKvsqK/kuGUHEd2K+wwIsygOB0kubeRxssWOBlS15jX8O7BKTVth7b5ve7k3WnEbUDwVJLG8U8TJFrvGqErTwEVgBViVSeuHcBK741WFHvBLquRK2Nfyvosr1bxEj978zKuMFUZfgy1giRyvtW8zLwNdt085a2Nfz/UiYj+YwEsMUgZeaZ3wKqNxrxVUtYZ9NdcUHxswEK1+zlu2yl58pdac7yPPtw90vgeaShTlHZv8H9uUc/W3Fx9Kkjo0hJaoe22Mt1LO2Uhc36/gdirtAx5bSKEqNapOlWrRobxTalYT0TUStw4QP5AEwBhJUSw6lDbzVItlkmODTfGlrTzGcLrfBhZ9DeR+2XBlia4RH05ijKQQbe+lVQt77X+l4LC7trmXE9MwRpL7l1znT4RFhsxT7RMuAyKCxDRE19CTMfSUQSxtuK61St6pl1ER4kNJak6FWqkCStDTcRIH00isuYWuISwxZL4pd8+V+uXK08CBuw4GSnS263dAYjSNcfheME+A/RdsfukVPobiZbJbVcC3vwmD1yH2vD5dQU79PMUHk2BOQ2wY0rf7pfXeHHbAy8Cmx5ibxpZSCpq/+nzLZqCHEwa3AWEtSKKerO8+J2vD5tdQuQH2evckxVJ4id3x6oW+AB7ySzRuSdUP8naBmnORxM5vaEbH30dXgUVGzPl9qfXAawstAb4doqrc3DYi6GmjteK0swUsk+Ptflcg8DAgk9Zl4KxfYqMTTYymMQ7dg4y/CKNPeIU2+pj39qnVE+9Wwk7NAT91S6yV6i8pRBVy9TH9wNOAPPZ6Dl1/GrjSMTN8FXL1Mf2gYzMnx+Z/Bh4GPgb3v2ONKlTedYJWIVcf0w8C9bsqY00AM9T/RRsHzKrtUFjPgggJM018MInEPJ9Ho4955984xBERERERERH/JX8DRJZswd7jzNsAAAAASUVORK5CYII=",alt:"",id:"s"})}),Object(r.jsx)("p",{id:"action-message",children:"Make your move."})]})},g=function(){var e=Object(s.useState)("Do you dare?"),c=Object(i.a)(e,2),t=c[0],A=c[1],a=Object(s.useState)(0),n=Object(i.a)(a,2),g=n[0],u=n[1],j=Object(s.useState)(0),w=Object(i.a)(j,2),b=w[0],h=w[1],O=Object(s.useState)(""),R=Object(i.a)(O,2),S=R[0],B=R[1],D=Object(s.useState)(""),p=Object(i.a)(D,2),v=p[0],x=p[1],C=Object(s.useState)(0),E=Object(i.a)(C,2),U=E[0],Q=E[1],m="(user)",T="(comp)";Object(s.useEffect)((function(){f()}),[U]),Object(s.useEffect)((function(){V()}),[v]);var f=function(){var e=Math.floor(3*Math.random());x(["r","p","s"][e])},K=function(e){return"r"===e?"Rock":"p"===e?"Paper":"Scissors"},V=function(){switch(S+v){case"rs":case"pr":case"sp":u(g+1),A("".concat(K(S)).concat(m," beats ").concat(K(v)).concat(T));break;case"sr":case"rp":case"ps":h(b+1),A("".concat(K(S)).concat(m," loses to ").concat(K(v)).concat(T));break;case"ss":case"rr":case"pp":A("DRAW")}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Rock Paper Scissors"})}),Object(r.jsx)(o,{userScore:g,compScore:b}),Object(r.jsx)(d,{result:t}),Object(r.jsx)(l,{setUserChoice:B,setCounter:Q,counter:U})]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(c){var t=c.getCLS,s=c.getFID,A=c.getFCP,a=c.getLCP,n=c.getTTFB;t(e),s(e),A(e),a(e),n(e)}))};n.a.render(Object(r.jsx)(A.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),u()},9:function(e,c,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.597cf7ab.chunk.js.map