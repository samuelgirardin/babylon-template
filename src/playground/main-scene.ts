import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { DefaultRenderingPipeline } from "@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline";
import { Engine } from "@babylonjs/core/Engines/engine";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Scene } from "@babylonjs/core/scene";
import { Tools } from "@babylonjs/core/Misc/tools";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { WebGPUEngine } from "@babylonjs/core/Engines/webgpuEngine";
import "@babylonjs/core/Helpers/sceneHelpers";


export default class MainScene {
  private camera: ArcRotateCamera;

  constructor(private scene: Scene, private canvas: HTMLCanvasElement, private engine: Engine | WebGPUEngine) {
    this._setCamera(scene);
    this._setLight(scene);
  
  }

  _setCamera(scene: Scene): void {
    this.camera = new ArcRotateCamera("camera", Tools.ToRadians(90), Tools.ToRadians(80), 20, Vector3.Zero(), scene);
    this.camera.attachControl(this.canvas, true);
    this.camera.setTarget(Vector3.Zero());
  }

  _setLight(scene: Scene): void {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.5;
  }

 
  
}
