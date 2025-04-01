import "./style.css";
import Alpine from "alpinejs";
import FlexillaAccordion from "@flexilla/alpine-accordion";
import Collapse from "./../../packages/alpine-collapse";
import Modal from "./../../packages/alpine-modal";
import Popover from "./../../packages/alpine-popover";
import Dropdown from "./../../packages/alpine-dropdown";
import Dismissible from "./../../packages/alpine-dismissible";
import Offcanvas from "./../../packages/alpine-offcanvas";
import Tabs from "./../../packages/alpine-tabs";
import Navbar from "./../../packages/alpine-navbar";
import AutoResize from "./../../packages/alpine-autoresize-area";


window.Alpine = Alpine;
Alpine.plugin(FlexillaAccordion);
Alpine.plugin(Collapse);
Alpine.plugin(Modal);
Alpine.plugin(Popover);
Alpine.plugin(Dropdown);
Alpine.plugin(Dismissible);
Alpine.plugin(Offcanvas);
Alpine.plugin(Tabs);
Alpine.plugin(Navbar);
Alpine.plugin(AutoResize);
Alpine.start();
