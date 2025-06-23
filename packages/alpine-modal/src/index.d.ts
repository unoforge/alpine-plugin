declare module '@flexilla/alpine-modal' {
    import { Alpine } from 'alpinejs';
    
    declare const PluginModal: (alpine: Alpine) => void;
    
    export default PluginModal;
}