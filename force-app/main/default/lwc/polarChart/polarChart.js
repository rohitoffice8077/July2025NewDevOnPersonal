import { LightningElement} from "lwc";
import chartjs from "@salesforce/resourceUrl/ChartJs";
import { loadScript } from "lightning/platformResourceLoader";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class PolarChart extends LightningElement {
    chart;
  config = {
    type: "polarArea",
    data: {
      labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
      datasets: [
        {
          label: "My First Dataset",
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(255, 205, 86)",
            "rgb(201, 203, 207)",
            "rgb(54, 162, 235)"
          ]
        }
      ]
    }
  };

  renderedCallback() {
    Promise.all([loadScript(this, chartjs)])
      .then(() => {
        const ctx = this.template.querySelector("canvas");
        this.chart = new window.Chart(ctx, this.config);
      })
      .catch((error) => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error",
            message: error.message,
            variant: "error"
          })
        );
      });
  }
}