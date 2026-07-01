if ( TRACE ) { TRACE( JSON.parse( '["GradientSlicedImage#OnPopulateMesh"]' ) ); }
/**
 * @version 1.0.9678.6788
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*GradientSlicedImage start.*/
    /**
     * @public
     * @class GradientSlicedImage
     * @augments UnityEngine.UI.Image
     */
    Bridge.define("GradientSlicedImage", {
        inherits: [UnityEngine.UI.Image],
        methods: {
            /*GradientSlicedImage.OnPopulateMesh start.*/
            OnPopulateMesh: function (vh) {
if ( TRACE ) { TRACE( "GradientSlicedImage#OnPopulateMesh", this ); }

                UnityEngine.UI.Image.prototype.OnPopulateMesh.call(this, vh);

                var rect = this.rectTransform.rect.$clone();

                var v = { v : new UnityEngine.UIVertex() };
                for (var i = 0; i < vh.currentVertCount; i = (i + 1) | 0) {
                    vh.PopulateUIVertex(v, i);

                    v.v.uv1 = new pc.Vec2( (v.v.position.x - rect.xMin) / rect.width, (v.v.position.y - rect.yMin) / rect.height );

                    vh.SetUIVertex(v.v.$clone(), i);
                }
            },
            /*GradientSlicedImage.OnPopulateMesh end.*/


        }
    });
    /*GradientSlicedImage end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine.UI","System"];

    /*GradientSlicedImage start.*/
    $m("GradientSlicedImage", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("UI/Gradient Sliced Image")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnPopulateMesh","t":8,"pi":[{"n":"vh","pt":$n[0].VertexHelper,"ps":0}],"sn":"OnPopulateMesh","rt":$n[1].Void,"p":[$n[0].VertexHelper]}]}; }, $n);
    /*GradientSlicedImage end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
