import "./node_modules/uikit/dist/css/uikit.css";
import "./node_modules/uikit/dist/js/uikit.js";
import "./node_modules/uikit/dist/js/uikit-core.js";
import "./node_modules/uikit/dist/js/uikit-core.min.js";
import "./node_modules/uikit/dist/js/uikit-icons.min.js";
import "./node_modules/uikit/dist/js/uikit.min.js";
import "./node_modules/uikit/dist/js/uikit-icons.js";

function Slidercard() {
  return (
      <div className="uk-slider-container" data-uk-sticky="offset: 50;">
        <div
          class="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
          uk-slider
        >
          <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
            <li>
              <div class="uk-panel">
                <img
                  src="https://lithohtml.themezaa.com/images/home-startup-service-img-01.jpg"
                  alt="dfd"
                />
                <div class="uk-position-center uk-panel">
                  <h1>1</h1>
                </div>
              </div>
            </li>
            <li>
              <div class="uk-panel">
                <img
                  src="https://lithohtml.themezaa.com/images/home-startup-service-img-02.jpg"
                  alt="trr"
                />
                <div class="uk-position-center uk-panel">
                  <h1>2</h1>
                </div>
              </div>
            </li>
            <li>
              <div class="uk-panel">
                <img
                  src="https://lithohtml.themezaa.com/images/home-startup-service-img-03.jpg"
                  alt="mhd"
                />
                <div class="uk-position-center uk-panel">
                  <h1>3</h1>
                </div>
              </div>
            </li>
            <li>
              <div class="uk-panel">
                <img
                  src="https://lithohtml.themezaa.com/images/home-startup-service-img-04.jpg"
                  alt="gf"
                />
                <div class="uk-position-center uk-panel">
                  <h1>4</h1>
                </div>
              </div>
            </li>
            <li>
              <div class="uk-panel">
                <img
                  src="https://lithohtml.themezaa.com/images/home-startup-service-img-05.jpg"
                  alt="jffjjt"
                />
                <div class="uk-position-center uk-panel">
                  <h1>5</h1>
                </div>
              </div>
            </li>
          </ul>

          <a
            class="uk-position-center-left uk-position-small uk-hidden-hover"
            href="www.google.com"
            uk-slidenav-previous
            uk-slider-item="previous"
          ></a>
          <a
            class="uk-position-center-right uk-position-small uk-hidden-hover"
            href="www.google.com"
            uk-slidenav-next
            uk-slider-item="next"
          ></a>
        </div>
      </div>
  );
}

export default Slidercard;






// https://lithohtml.themezaa.com/images/home-startup-service-img-05.jpg