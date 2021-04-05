gdjs.New_32scene3Code = {};
gdjs.New_32scene3Code.GDNewObject2Objects1= [];
gdjs.New_32scene3Code.GDNewObject2Objects2= [];
gdjs.New_32scene3Code.GDNewObjectObjects1= [];
gdjs.New_32scene3Code.GDNewObjectObjects2= [];
gdjs.New_32scene3Code.GDNewObject3Objects1= [];
gdjs.New_32scene3Code.GDNewObject3Objects2= [];
gdjs.New_32scene3Code.GDNewObject4Objects1= [];
gdjs.New_32scene3Code.GDNewObject4Objects2= [];
gdjs.New_32scene3Code.GDNewObject5Objects1= [];
gdjs.New_32scene3Code.GDNewObject5Objects2= [];

gdjs.New_32scene3Code.conditionTrue_0 = {val:false};
gdjs.New_32scene3Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition2IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition3IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition4IsTrue_0 = {val:false};
gdjs.New_32scene3Code.conditionTrue_1 = {val:false};
gdjs.New_32scene3Code.condition0IsTrue_1 = {val:false};
gdjs.New_32scene3Code.condition1IsTrue_1 = {val:false};
gdjs.New_32scene3Code.condition2IsTrue_1 = {val:false};
gdjs.New_32scene3Code.condition3IsTrue_1 = {val:false};
gdjs.New_32scene3Code.condition4IsTrue_1 = {val:false};


gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene3Code.GDNewObjectObjects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene3Code.GDNewObject3Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene3Code.GDNewObject3Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene3Code.GDNewObjectObjects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene3Code.GDNewObjectObjects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene3Code.GDNewObject3Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene3Code.GDNewObject2Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene3Code.GDNewObject2Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene3Code.GDNewObject2Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene3Code.GDNewObject3Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene3Code.GDNewObject2Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene3Code.GDNewObject3Objects1});gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.New_32scene3Code.GDNewObject4Objects1});gdjs.New_32scene3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene3Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObjectObjects1Objects, gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene3Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects, gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObjectObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDNewObjectObjects1 */
/* Reuse gdjs.New_32scene3Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].separateFromObjectsList(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObjectObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene3Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects, gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject2Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDNewObject2Objects1 */
/* Reuse gdjs.New_32scene3Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].separateFromObjectsList(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject2Objects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene3Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject2Objects1Objects, gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDNewObject2Objects1 */
/* Reuse gdjs.New_32scene3Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].separateFromObjectsList(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject2Objects1Objects, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32scene3Code.GDNewObject3Objects1.length !== 0 ? gdjs.New_32scene3Code.GDNewObject3Objects1[0] : null), true, "", 0);
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].flipX(false);
}
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].flipX(true);
}
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].setAnimation(2);
}
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].setAnimation(1);
}
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
{gdjs.New_32scene3Code.conditionTrue_1 = gdjs.New_32scene3Code.condition0IsTrue_0;
gdjs.New_32scene3Code.condition0IsTrue_1.val = true;
gdjs.New_32scene3Code.condition1IsTrue_1.val = true;
gdjs.New_32scene3Code.condition2IsTrue_1.val = true;
gdjs.New_32scene3Code.condition3IsTrue_1.val = true;
{
gdjs.New_32scene3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( !gdjs.New_32scene3Code.condition0IsTrue_1.val ) {
{
gdjs.New_32scene3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( !gdjs.New_32scene3Code.condition1IsTrue_1.val ) {
{
gdjs.New_32scene3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( !gdjs.New_32scene3Code.condition2IsTrue_1.val ) {
{
gdjs.New_32scene3Code.condition3IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
}
}
gdjs.New_32scene3Code.conditionTrue_1.val = !gdjs.New_32scene3Code.condition3IsTrue_1.val;
}
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].setAnimation(0);
}
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
gdjs.New_32scene3Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.New_32scene3Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene3Code.conditionTrue_1 = gdjs.New_32scene3Code.condition1IsTrue_0;
gdjs.New_32scene3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8123180);
}
}}
if (gdjs.New_32scene3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].returnVariable(gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDNewObject3Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariableNumber(gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDNewObject3Objects1[k] = gdjs.New_32scene3Code.GDNewObject3Objects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDNewObject3Objects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDNewObject3Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariableNumber(gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariables().getFromIndex(0)) == 2 ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDNewObject3Objects1[k] = gdjs.New_32scene3Code.GDNewObject3Objects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDNewObject3Objects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDNewObject3Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariableNumber(gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariables().getFromIndex(0)) == 3 ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDNewObject3Objects1[k] = gdjs.New_32scene3Code.GDNewObject3Objects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDNewObject3Objects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDNewObject3Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariableNumber(gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariables().getFromIndex(0)) == 4 ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDNewObject3Objects1[k] = gdjs.New_32scene3Code.GDNewObject3Objects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDNewObject3Objects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDNewObject3Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariableNumber(gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariables().getFromIndex(0)) == 5 ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDNewObject3Objects1[k] = gdjs.New_32scene3Code.GDNewObject3Objects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDNewObject3Objects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].returnVariable(gdjs.New_32scene3Code.GDNewObject3Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene3Code.GDNewObject4Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects, gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject4Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene4", false);
}}

}


};

gdjs.New_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene3Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene3Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene3Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject5Objects2.length = 0;

gdjs.New_32scene3Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene3Code'] = gdjs.New_32scene3Code;
