
var commonvuefns = {
    onMounted: function($el, configs) {
        var { innerHTML = '' } = configs || {};
        
        if(innerHTML && innerHTML.trim && innerHTML.trim().length>0) {
            // Create style
            var styleEl = document.createElement('style');
            styleEl.innerHTML  = innerHTML;
            // Scoped style, thanks to scoper library
            styleEl.setAttribute('scoped', '')
            // $el.prepend(styleEl);
            $el.appendChild(styleEl);
        }        
    }
}

var vuefilters = {
    /**
    * Filter to truncate string, accepts a length parameter
    */
    truncate(value, length) {
        if (typeof value === 'undefined' || value === null) {
            return '';
        }
        return value.length > length
            ? value.substr(0, length) + '...'
            : value;
    },
}

const helperfns = {
	copyElementContent (el) {
		el.setAttribute('contenteditable', 'true')
		el.focus()

		document.execCommand('selectAll', false, null)
		document.execCommand('copy')

		el.removeAttribute('contenteditable')
    },
}

// class VueTemplate extends HTMLElement {
//     constructor() {
//         // Always call super first in constructor
//         super();
//     }

//     connectedCallback() {
//         var elementType = this.getAttribute('data-is');

//         if(!elementType) {
//             return;
//         }
        
//         // Create a shadow root
//         this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'

//         var vueComponentEl = document.createElement(elementType);
//         vueComponentEl.setAttribute('class', 'wrapper template-section');

//         // Create some CSS to apply to the shadow dom
//         const style = document.createElement('style');
//         style.textContent = '* {font-size: 20px;}';

//         // attach the created elements to the shadow DOM
//         this.shadowRoot.append(style, vueComponentEl);
//     }
//     disconnectedCallback() {
//         console.log('disconnected')
//     }

//     // Watch for attribute changes
//     static get observedAttributes() {
//         return ['disabled', 'open'];
//     }

//     get disabled() {
//         return this.hasAttribute('disabled');
//     }

//     set disabled(val) {
//         if (val) {
//             this.setAttribute('disabled', '');
//         } else {
//             this.removeAttribute('disabled');
//         }
//     }

//     // Only called for the disabled and open attributes due to observedAttributes
//     attributeChangedCallback(name, oldValue, newValue) {
//         // When the drawer is disabled, update keyboard/screen reader behavior.
//         if (this.disabled) {
//             this.setAttribute('tabindex', '-1');
//             this.setAttribute('aria-disabled', 'true');
//         } else {
//             this.setAttribute('tabindex', '0');
//             this.setAttribute('aria-disabled', 'false');
//         }
//         // TODO: also react to the open attribute changing.
//     }
// }

// customElements.define('vue-template', VueTemplate);

