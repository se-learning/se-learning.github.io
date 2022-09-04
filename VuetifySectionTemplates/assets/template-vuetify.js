/*
Vue.component('template-', {
    template:  `

    `,
    data: function () {
        return {
            
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});


var component = {
    props: {},
    template:  `
                
    `,
    data: function () {
        return {
            
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

*/


// ----- Header templates section
Vue.component('template-header1', {
    props: [],
    template:  `
                <div>
                    <v-app-bar flat>
                        <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
                    
                        <v-container class="mx-auto py-0">
                            <v-row align="center">
                                <v-img src="assets/images/logo.png" class="mr-5" contain height="48" width="48" max-width="48"
                                    @click="$vuetify.goTo(0)" />
                    
                                <v-btn v-for="(link, i) in items" :key="i" v-bind="link" class="hidden-sm-and-down" text
                                    @click="onClick($event, link)">
                                    {{ link.text }}
                                </v-btn>
                    
                                <v-spacer />
                    
                                <v-text-field append-icon="mdi-magnify" flat hide-details solo-inverted style="max-width: 300px;" />
                            </v-row>
                        </v-container>
                    </v-app-bar>

                    <v-navigation-drawer
                        v-model="drawer"
                        dark
                        app
                        temporary
                    >
                        <v-list>
                            <v-list-item
                                v-for="(link, i) in items"
                                :key="i"
                                :href="link.href"
                                @click="onClick($event, link)"
                            >
                                <v-list-item-title v-text="link.text" />
                            </v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                </div>`,
    data: function () {
        return {
            drawer: false,
            items: [
                {
                    text: 'Home',
                    href: '#!',
                },
                {
                    text: 'About',
                    href: '#about',
                },
            ],
        }
    },
    computed: {

    },
    watch: {

    },
    methods: {
        onClick (e, item) {
            e.stopPropagation()

            if (item.to || !item.href) return

            this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
        },
        setDrawer(payload) {this.drawer = payload},
        toggleDrawer () {this.drawer = !this.drawer},
    }
});

Vue.component('template-header2', {
    props: {
        links: Array,
        logo: {
            type: String,
            default: 'assets/images/logo.png',
        },
    },
    template: `
                <div class="template-header2">
                    <v-app-bar color="white" elevation="1" height="80">
                        <v-img :src="logo" class="mr-5" contain height="48" width="48" max-width="48" />

                        <v-spacer />

                        <div>
                            <v-tabs class="hidden-sm-and-down">
                                <v-tab v-for="(link, i) in links" :key="i" v-bind="link" :ripple="false"
                                    active-class="text--primary" class="font-weight-bold" min-width="96" text>
                                    {{ link.name }}
                                </v-tab>
                            </v-tabs>
                        </div>

                        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
                    </v-app-bar>

                    <v-navigation-drawer bottom color="transparent" fixed height="auto" overlay-color="secondary" overlay-opacity=".8"
                        temporary v-model="drawer">
                        <v-list color="white" shaped>
                            <v-list-item v-for="(link, i) in links" :key="i" v-bind="link" color="primary">
                                <v-list-item-content>
                                    <v-list-item-title v-text="link.name" />
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-navigation-drawer>

                </div>
                `,
    data: function () {
        return {
            drawer: null,
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            /* cyrillic-ext */
            @font-face {
                font-family: 'PT Sans';
                font-style: normal;
                font-weight: 400;
                src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0-ExdGM.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'PT Sans';
                font-style: normal;
                font-weight: 400;
                src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0aExdGM.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* latin-ext */
            @font-face {
                font-family: 'PT Sans';
                font-style: normal;
                font-weight: 400;
                src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0yExdGM.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'PT Sans';
                font-style: normal;
                font-weight: 400;
                src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0KExQ.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'PT Sans';
                font-style: normal;
                font-weight: 700;
                src: local('PT Sans Bold'), local('PTSans-Bold'), url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0OOtLQ0Z.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'PT Sans';
                font-style: normal;
                font-weight: 700;
                src: local('PT Sans Bold'), local('PTSans-Bold'), url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0OqtLQ0Z.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* latin-ext */
            @font-face {
                font-family: 'PT Sans';
                font-style: normal;
                font-weight: 700;
                src: local('PT Sans Bold'), local('PTSans-Bold'), url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0OCtLQ0Z.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'PT Sans';
                font-style: normal;
                font-weight: 700;
                src: local('PT Sans Bold'), local('PTSans-Bold'), url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0O6tLQ.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }

            .template-header2 * {
                font-family: PT Sans,sans-serif;
            }

            .template-header2 .v-tabs-slider {
                max-width: 24px;
                margin: 0 auto
            }

            .template-header2 .v-tab::before {
                display: none
            }
                `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
});

var templateCategory1FeedCard = {
    template:  `
                <v-col
                    cols="12"
                    :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
                    class="template-category1-feed-card"
                >
                    <v-card
                        :height="value.prominent ? 450 : 350"
                        color="grey lighten-1"
                        dark
                        flat
                        tile
                        v-bind="(({ to, href }) => ({ to, href }))(value)"
                    >
                        <v-img
                            :src="value.hero"
                            height="100%"
                            gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
                        >
                            <v-row
                                v-if="!value.prominent"
                                class="fill-height text-right ma-0"
                            >
                                <v-col cols="12">
                                    <v-chip
                                        label
                                        class="mx-0 mb-2 text-uppercase"
                                        color="grey darken-3"
                                        text-color="white"
                                        small
                                        @click.stop=""
                                    >
                                        {{ value.category }}
                                    </v-chip>

                                    <h3 class="title font-weight-bold mb-2">
                                        {{ value.title }}
                                    </h3>

                                    <div class="caption">
                                        {{ value.author }}<br>{{ value.date }}
                                    </div>
                                </v-col>

                                <v-col align-self="end">
                                    <v-chip
                                        class="text-uppercase ma-0"
                                        color="primary"
                                        label
                                        small
                                        @click.stop=""
                                    >
                                        {{ readMoreText }}
                                    </v-chip>
                                </v-col>
                            </v-row>
                        </v-img>
                    </v-card>
                </v-col>
                `,
    props: {
        size: {
            type: Number,
            required: true,
        },
        value: {
            type: Object,
            default: () => ({}),
        },
        readMoreText: {
            type: String,
            default: 'Read More'
        }
    },
    data: function () {
        return {
            
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            .template-category1-feed-card .v-image__image {
                transition: .3s linear;
            }
            `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
}

Vue.component('template-category1', {
    props: {
        layout: {
            type: Array,
            required: true
        },
        articles: {
            type: Array,
            required: true
        },
        readMoreText: String
    },
    template:  `
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <slot />
                        </v-col>

                        <feed-card
                            v-for="(article, i) in paginatedArticles"
                            :key="article.title"
                            :size="layout[i]"
                            :value="article"
                            :read-more-text="readMoreText"
                        />
                    </v-row>
                </v-container>
                `,
    components: {
        FeedCard: templateCategory1FeedCard,
    },
    data: function () {
        return {            
            page: 1,
        }
    },
    computed: {
        pages () {
            return Math.ceil(this.articles.length / 11)
        },
        paginatedArticles () {
            const start = (this.page - 1) * 11
            const stop = this.page * 11

            return this.articles.slice(start, stop)
        },
    },
    watch: {
        page () {
            window.scrollTo(0, 0)
        },
    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            
            `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
});

Vue.component('template-category2', {
    template:  `
        <div class="template-category2 mt-8">
            <div class="headline font-weight-regular text-center">Danh mục</div>
            <div style="margin-left: -52px; margin-right: -52px;">
                <v-slide-group
                    active-class="success"
                    show-arrows
                    center-active
                    class="mx-auto"
                    style="max-width: 1200px"
                >
                    <template v-slot:prev>
                        <v-btn fab small depressed style="left: 60px; z-index: 1">
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                    </template>

                    <template v-slot:next>
                        <v-btn fab small depressed style="right: 60px">
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </template>

                    <v-slide-item
                        class="my-4 mb-8 justify-center text-center"
                        v-for="(item,i) in categories"
                        :key="i"
                        v-slot:default="{ active, toggle }"
                    >
                        <v-hover
                            v-slot:default="{ hover }"
                        >
                            <v-card
                                class="mr-4"
                                width="150px"
                                :elevation="hover ? 16 : 0"
                                :to="item.code"
                            >
                                <div class="mt-4">
                                    <v-avatar :color="item.iconColor" size="64">
                                        <v-icon dark large>{{ item.icon }}</v-icon>
                                    </v-avatar>
                                </div>

                                <v-card-title class="subtitle-1 justify-center" style="word-break: break-word;">
                                    {{ item.name }}
                                </v-card-title>
                            </v-card>
                        </v-hover>
                    </v-slide-item>
                </v-slide-group>
            </div>
        </div>
    `,
    data: function () {
        return {
            categories: [
                {
                    name: 'Điện Thoại - Máy Tính Bảng',
                    code: 'dien-thoai-may-tinh-bang',
                    icon: 'mdi-tablet-cellphone',
                    iconColor: 'teal',
                    href: ''
                },            
                {
                    name: 'Điện Tử - Điện Lạnh',
                    code: 'dien-tu-dien-lanh',
                    icon: 'mdi-television',
                    iconColor: 'cyan',
                    href: ''
                },
                {
                    name: 'Phụ Kiện - Thiết Bị Số',
                    code: 'phu-kien-thiet-bi-so',
                    icon: 'mdi-headphones',
                    iconColor: 'deep-orange',
                    href: ''
                },
                {
                    name: 'Laptop - Thiết Bị IT',
                    code: 'laptop-thiet-bi-it',
                    icon: 'mdi-laptop',
                    iconColor: 'indigo',
                    href: ''
                },
                {
                    name: 'Máy Ảnh - Quay Phim',
                    code: 'camera',
                    icon: 'mdi-camera-outline',
                    iconColor: 'purple',
                    href: ''
                },
                {
                    name: 'Điện Gia Dụng',
                    code: 'dien-gia-dung',
                    icon: 'mdi-washing-machine',
                    iconColor: 'green',
                    href: ''
                },
                {
                    name: 'Nhà Cửa - Đời Sống',
                    code: 'nha-cua-doi-song',
                    icon: 'mdi-home-outline',
                    iconColor: 'pink',
                    href: ''
                },
                {
                    name: 'Hàng Tiêu Dùng - Thực Phẩm',
                    code: 'bach-hoa-online',
                    icon: 'mdi-food-fork-drink',
                    iconColor: 'orange',
                    href: ''
                },
                {
                    name: 'Đồ chơi, Mẹ & Bé',
                    code: 'me-va-be',
                    icon: 'mdi-baby-bottle-outline',
                    iconColor: 'light-green',
                    href: ''
                },
                {
                    name: 'Làm Đẹp - Sức Khỏe',
                    code: 'lam-dep-suc-khoe',
                    icon: 'mdi-lipstick',
                    iconColor: 'blue',
                    href: ''
                },
                {
                    name: 'Thời Trang - Phụ Kiện',
                    code: 'thoi-trang',
                    icon: 'mdi-tshirt-crew-outline',
                    iconColor: 'amber',
                    href: ''
                },
                {
                    name: 'Thể Thao - Dã Ngoại',
                    code: 'the-thao',
                    icon: 'mdi-volleyball',
                    iconColor: 'deep-purple',
                    href: ''
                },
                {
                    name: 'Xe Máy, Ô tô, Xe Đạp',
                    code: 'xe-may-oto-xe-dap',
                    icon: 'mdi-motorbike',
                    iconColor: 'light-blue',
                    href: ''
                },
                {
                    name: 'Sách, VPP & Quà Tặng',
                    code: 'nha-sach',
                    icon: 'mdi-book-open-variant',
                    iconColor: 'lime',
                    href: ''
                },
                {
                    name: 'Voucher - Dịch Vụ - Thẻ Cào',
                    code: 'voucher-dich-vu',
                    icon: 'mdi-card-text-outline',
                    iconColor: 'yellow',
                    href: ''
                },            
            ],
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-slider1', {
    template:  `
        <!-- Long banners -->
        <div class="template-slider1" style="margin-left: -52px; margin-right: -52px;">
            <v-slide-group
                v-model="active"
                class="mt-2 banner-slide-group mx-auto"
                mandatory
                show-arrows
                center-active
                ref="bannerSlideGroup"
                @change="onChanged"
                style="max-width: 1200px"
            >

                <template v-slot:prev>
                    <v-btn fab small depressed style="left: 60px; z-index: 1">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                </template>

                <template v-slot:next>
                    <v-btn fab small depressed style="right: 60px">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </template>

                <v-slide-item
                    v-for="(item,i) in images"
                    :key="i"
                    v-slot:default="{ active, toggle }"                                
                >
                    <v-card
                        class="mr-4"
                        height="130"
                        width="500"
                        @click="toggle"
                        :to="item.link"
                    >                                    
                        <v-img
                            height="130"
                            width="500"
                            position="center center"
                            :src="item.image"
                        ></v-img>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </div>
    `,
    data: function () {
        return {
            active: 0,
            images: [
                {
                    title: 'Samsung Galaxy S20',
                    image: 'assets/images/americawest46937311920.jpg',
                    href: '#',
                },
                {
                    title: 'Apple Iphone 12',
                    image: 'assets/images/bedroom56642211920.jpg',
                    href: '#',
                },
                {
                    title: 'Samsung Galaxy Note 20',
                    image: 'assets/images/canada18993281920.jpg',
                    href: '#',
                },
                {
                    title: 'Surface Pro 7',
                    image: 'assets/images/canal54882711920.jpg',
                    href: '#',
                },
                {
                    title: 'Surface Laptop 3',
                    image: 'assets/images/guggenheimmuseum27072581920.jpg',
                    href: '#',
                },
            ],            
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        onChanged(item) {
            // console.log(item, this.$refs.bannerSlideGroup);
        },
    }
});


// Zero theme components
var mixinZeroThemeHeading = {
    name: 'Heading',

    inject: {
        heading: {
            default: () => ({ align: 'left' }),
        },
    },

    provide() {
        return {
            heading: {
                align: this.align,
            },
        }
    },

    props: {
        align: {
            type: String,
            default() {
                return this.heading.align
            },
        },
    },

    computed: {
        justify() {
            switch (this.align) {
                case 'center': return 'center'
                case 'right': return 'end'
                default: return 'start'
            }
        },
    },
}

var componentZeroThemeBtn = {
    props: {
        color: {
            type: String,
            default: 'primary',
        },
        depressed: {
            type: Boolean,
            default: true,
        },
        minWidth: {
            type: [Number, String],
            default: 164,
        },
        tile: {
            type: Boolean,
            default: true,
        },
    },
    template:  `
        <v-btn
            :color="color"
            :depressed="depressed"
            :min-width="minWidth"
            :tile="tile"
            class="font-weight-bold"
            x-large
            v-bind="$attrs"
            v-on="$listeners"
        >
            <slot />
        </v-btn>
    `,
    data: () => ({
        
    }),
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentZeroThemeIcon = {
    props: {
        size: {
            type: [Number, String],
            default: 56,
        },
    },
    template:  `
        <v-icon
            :size="size"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <slot />
        </v-icon>
    `,
    data: () => ({
        
    }),
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentZeroThemeAvatar = {
    props: {
        color: String,
        dark: Boolean,
        icon: String,
        outlined: Boolean,
        size: {
          type: [Number, String],
          default: 56,
        },
    },
    template:  `
        <div class="component-zero-theme-avatar">
            <div
                :class="classes"
                class="base-avatar d-inline-flex"
            >
                <v-avatar
                    v-if="outlined"
                    :color="color || 'grey lighten-3'"
                    :size="outlineSize"
                    :style="styles"
                    class="base-avatar__outline"
                    style="opacity: .4"
                />

                <v-avatar
                    :color="color || 'white'"
                    :size="size"
                    class="base-avatar__avatar"
                    v-bind="$attrs"
                    v-on="$listeners"
                >
                    <base-icon
                        v-if="icon"
                        :dark="dark"
                        :size="size / 2"
                    >
                        {{ icon }}
                    </base-icon>
                </v-avatar>
            </div>
        </div>
    `,
    components: {
        'base-icon': componentZeroThemeIcon
    },
    data: () => ({
        multiply: 6,
    }),
    computed: {
        classes () {
            return [
              this.outlined && 'base-avatar--outlined',
            ]
          },
          outlineSize () {
            return Number(this.size) + (this.size / this.multiply)
          },
          styles () {
            const margin = this.size / (this.multiply * 2)
    
            return {
              // Aligns the outline content with the content
              margin: `-${margin}px 0 0 -${margin}px`,
            }
        },
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .component-zero-theme-avatar .base-avatar {
                border-radius: 50%;
                position: relative;
                overflow: visible;
            }

            .component-zero-theme-avatar .base-avatar__outline {
                position: absolute !important;
                left: 0;
                top: 0;
            }

            .component-zero-theme-avatar .base-avatar--outlined {
                background-color: #FFFFFF;
            }

            .component-zero-theme-avatar .base-avatar--outlined .base-avatar__avatar {
                border: thin solid rgba(0, 0, 0, .12) !important;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentZeroThemeHeading = {
    props: {
        align: {
            type: String,
            default() {
                return this.heading.align
            },
        },
        dense: {
            type: Boolean,
            default() {
                return this.isDense
            },
        },
        size: {
            type: String,
            default: 'display-2',
        },
        space: {
            type: [Number, String],
            default: 4,
        },
        mobileSize: {
            type: String,
            default: 'display-1',
        },
        mobileBreakPoint: {
            type: [Number, String],
            default: 768,
        },
        tag: {
            type: String,
            default: 'h1',
        },
        title: String,
        weight: {
            type: String,
            default: 'black',
        },
    },
    template:  `
        <component
            :is="tag"
            :class="classes"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <template v-if="title">
            {{ title }}
            </template>

            <slot v-else />
        </component>
    `,
    components: {
        
    },
    inject: {
        theme: {
            default: () => ({ isDark: false }),
        },
        heading: {
            default: () => ({ align: 'left' }),
        },
    },
    provide() {
        return {
            heading: {
                align: this.align,
            },
        }
    },
    data: () => ({
        isDark: false
    }),
    computed: {
        classes() {
            const classes = [
                this.fontSize,
                `font-weight-${this.weight}`,
                `mb-${this.space}`,
                `text-${this.align}`,
                this.theme.isDark && 'white--text',
            ]

            return classes
        },
        fontSize() {
            return this.$vuetify.breakpoint.width >= this.mobileBreakPoint
                ? this.size
                : this.mobileSize
        },
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentZeroThemeTitle = {
    extends: componentZeroThemeHeading,

    mixins: [mixinZeroThemeHeading],

    props: {
        size: {
            type: String,
            default: 'title',
        },
        mobileSize: {
            type: String,
            default: 'subtitle-1',
        },
        tag: {
            type: String,
            default: 'h3',
        },
        weight: {
            type: String,
            default: 'bold',
        },
    },
};

var componentZeroThemeSubtitle = {
    extends: componentZeroThemeHeading,

    props: {
        size: {
            type: String,
            default: 'body-2',
        },
        mobileSize: {
            type: String,
            default: 'body-1',
        },
        space: {
            type: [String, Number],
            default: 0,
        },
        tag: {
            type: String,
            default: 'div',
        },
        weight: {
            type: [Number, String],
            default: 'regular',
        },
    },

    computed: {
        classes () {
          return [
            ...componentZeroThemeHeading.computed.classes.call(this),
            'grey--text',
          ]
        },
    },
};

var componentZeroThemeSubheading = {
    extends: componentZeroThemeHeading,

    props: {
        size: {
            type: String,
            default: 'headline',
        },
        sizeMobile: {
            type: String,
            default: 'title',
        },
        weight: {
            type: String,
            default: 'bold',
        },
    },
};

var componentZeroThemeDivider = {
    template: `
        <v-responsive
            :class="classes"
            class="component-zero-theme-divider base-divider"
            max-width="28"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <v-divider />
        </v-responsive>
    `,
    mixins: [mixinZeroThemeHeading],
    props: {
        color: String,
        dense: Boolean,
        space: {
            type: [Number, String],
            default: 6,
        },
    },
    computed: {
        classes() {
            return [
                this.color,
                this.margin,
                `mb-${this.space}`,
                this.dense && 'base-divider--dense',
            ]
        },
        margin() {
            switch (this.align) {
                case 'left': return 'mr-auto'
                case 'right': return 'ml-auto'
                default: return 'mx-auto'
            }
        },
    },
    mounted() {
        var innerHTML  = `
            .component-zero-theme-divider.base-divider .v-divider {
                border-width: 3px 0 0 0 !important
            }

            .component-zero-theme-divider.base-divider.base-divider--dense .v-divider {
                border-width: 2px 0 0 0 !important
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
};

var componentZeroThemeBody = {
    template: `
        <component
            :is="tag"
            :class="classes"
            :style="styles"
            class="component-zero-theme-body base-body body-1"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <!-- Only use v-html for user data -->
            <div
            v-if="text"
            v-text="text"
            />

            <div
            v-else-if="html"
            v-html="html"
            />

            <slot v-else />
        </component>
    `,
    mixins: [mixinZeroThemeHeading],
    inject: ['theme'],
    props: {
        html: String,
        maxWidth: {
            type: [Number, String],
            default: undefined,
        },
        space: {
            type: [Number, String],
            default: 10,
        },
        tag: {
            type: String,
            default: 'p',
        },
        text: String,
    },
    computed: {
        classes () {
          return [
            'grey--text',
            this.theme.isDark ? 'text--lighten-1' : 'text--darken-1',
            `text-${this.heading.align}`,
            `mb-${this.space}`,
          ]
        },
        styles () {
          return {
            maxWidth: `${this.maxWidth}px`,
          }
        },
    },
};

var componentZeroThemeAvatarCard = {
    props: {
        align: {
            type: String,
            default: 'left',
        },
        color: String,
        dark: Boolean,
        horizontal: Boolean,
        icon: String,
        outlined: {
            type: Boolean,
            default: true,
        },
        space: {
            type: [Number, String],
            default: 8,
        },
        size: {
            type: [Number, String],
            default: 72,
        },
        text: String,
        title: String,
    },
    template:  `
        <div
            :class="classes"
            class="pt-2"
        >
            <base-avatar
            v-if="icon"
            :color="color"
            :dark="dark"
            :icon="icon"
            :outlined="outlined"
            :size="size"
            class="mb-3"
            />

            <div :class="horizontal && title && 'ml-6'">
            <base-title
                :title="title"
                class="text-uppercase"
                space="3"
            />

            <base-body
                v-if="text || $slots.default"
                :space="horizontal ? 0 : undefined"
                :text="text"
                class="mx-auto"
                max-width="700"
            >
                <slot />
            </base-body>
            </div>
        </div>
    `,
    components: {
        'base-avatar': componentZeroThemeAvatar,
        'base-title': componentZeroThemeTitle,
        'base-body': componentZeroThemeBody,
    },
    mixins: [mixinZeroThemeHeading],
    data: () => ({
        
    }),
    computed: {
        classes () {
            const classes = [
              `mb-${this.space}`,
            ]
    
            if (this.horizontal) {
              classes.push('d-flex')
    
              if (!this.$slots.default && !this.text) {
                classes.push('align-center')
              }
            }
    
            return classes
        },
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentZeroThemeSection = {
    props: {
        space: {
            type: [Number, String],
            default: 96,
        },
    },
    template:  `
        <section
            v-bind="$attrs"
            :style="styles"
            v-on="$listeners"
        >
            <slot />
        </section>
    `,
    components: {
        
    },
    data: () => ({
        
    }),
    computed: {
        styles () {
            const space = this.$vuetify.breakpoint.mdAndUp
              ? this.space
              : this.space / 2
    
            return {
            //   ...this.measurableStyles,
              padding: `${space}px 0`,
            }
        },
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentZeroThemeSectionHeading = {
    props: {
        align: {
            type: String,
            default: 'center',
        },
        color: {
            type: String,
            default: 'primary',
        },
        icon: String,
        outlined: Boolean,
        space: {
            type: [Number, String],
            default: 12,
        },
        subtitle: String,
        text: String,
        title: String,
    },
    template:  `
        <div
            :class="classes"
            class="base-section-heading"
        >
            <base-avatar
                v-if="icon"
                :icon="icon"
                :outlined="outlined"
                class="mb-4"
                color="primary"
                dark
            />

            <base-subtitle
                v-if="subtitle"
                :title="subtitle"
                space="1"
                tag="h2"
            />

            <base-subheading
                v-if="title"
                :align="align"
                :title="title"
                class="text-uppercase"
                space="2"
            />

            <base-divider :color="color" />

            <base-body
                v-if="$slots.default || text"
                class="mx-auto"
                max-width="700"
            >
                <slot v-if="$slots.default" />

                <template v-else>
                {{ text }}
                </template>
            </base-body>
        </div>
    `,
    components: {
        'base-avatar': componentZeroThemeAvatar,
        'base-subtitle': componentZeroThemeSubtitle,
        'base-subheading': componentZeroThemeSubheading,
        'base-body': componentZeroThemeBody,
        'base-divider': componentZeroThemeDivider,
    },
    mixins: [mixinZeroThemeHeading],
    data: () => ({
        
    }),
    computed: {
        classes () {
            return [
              `text-${this.align}`,
              `mb-${this.space}`,
            ]
        },
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentZeroThemeInfoCard = {
    props: {
        dark: Boolean,
        callout: String,
        color: {
            type: String,
            default: 'primary',
        },
        icon: String,
        subtitle: String,
        text: String,
        title: String,
    },
    template:  `
        <v-theme-provider :dark="dark">
            <v-container class="pa-0">
            <v-row
                :justify="justify"
                no-gutters
            >
                <v-col
                v-if="icon"
                :class="'text-' + align"
                cols="12"
                class="mb-4"
                >
                <base-icon :color="color">
                    {{ icon }}
                </base-icon>
                </v-col>

                <v-col
                v-if="title || subtitle"
                :cols="callout ? 9 : 12"
                >
                <base-subtitle
                    v-if="subtitle"
                    :title="subtitle"
                    space="1"
                />

                <base-title
                    :title="title"
                    class="text-uppercase"
                    space="1"
                />

                <base-divider :color="color" />

                <base-body
                    v-if="text || $slots.default"
                    :text="text"
                    space="6"
                >
                    <slot />
                </base-body>
                </v-col>

                <v-col
                v-if="callout"
                cols="2"
                >
                <div
                    class="display-3 grey--text text--lighten-4 font-weight-bold pr-8"
                    v-text="callout"
                />
                </v-col>
            </v-row>
            </v-container>
        </v-theme-provider>
    `,
    components: {
        'base-icon': componentZeroThemeIcon,
        'base-subtitle': componentZeroThemeSubtitle,
        'base-title': componentZeroThemeTitle,
        'base-body': componentZeroThemeBody,
        'base-divider': componentZeroThemeDivider,
    },
    mixins: [mixinZeroThemeHeading],
    data: () => ({
        
    }),
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentZeroThemeBusinessContact = {
    props: {
        dark: Boolean,
        dense: Boolean,
        title: String,
    },
    template:  `
        <v-theme-provider :dark="dark">
            <div>
                <base-info-card
                    :title="title"
                    color="primary"
                >
                    <slot />
                </base-info-card>

                <template v-for="({ icon, text, title: t }, i) in business">
                    <base-avatar-card
                        :key="i"
                        :icon="icon"
                        :outlined="false"
                        :title="!dense ? t : undefined"
                        color="transparent"
                        horizontal
                        space="0"
                    >
                        <!-- Do not use v-html for user -->
                        <!-- provided values -->
                        <div v-html="text" />
                    </base-avatar-card>

                    <v-divider
                        v-if="i + 1 !== business.length"
                        :key="'divider-' + i"
                        class="my-2"
                    />
                </template>
            </div>
        </v-theme-provider>
    `,
    components: {
        'base-info-card': componentZeroThemeInfoCard,
        'base-avatar-card': componentZeroThemeAvatarCard,
        'base-divider': componentZeroThemeDivider,
    },
    data: () => ({
        business: [
            {
              icon: 'mdi-map-marker-outline',
              title: 'Address',
              text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
            },
            {
              icon: 'mdi-cellphone',
              title: 'Phone',
              text: '01 (800) 433 744<br>01 (800) 433 633',
            },
            {
              icon: 'mdi-email',
              title: 'Email',
              text: 'john@vuetifyjs.com<br>heather@vuetifyjs.com',
            },
        ],
    }),
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentZeroThemeTextField = {
    props: {
        
    },
    template:  `
        <v-text-field
            outlined
            dense
            single-line
            v-bind="$attrs"
            v-on="$listeners"
        >
            <slot
                slot="append-outer"
                name="append-outer"
            />
        </v-text-field>
    `,
    components: {
        
    },
    data: () => ({
        
    }),
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentZeroThemeTextarea = {
    props: {
        
    },
    template:  `
        <v-textarea
            outlined
            dense
            single-line
            v-bind="{
                rows: 6,
                ...$attrs,
            }"
            v-on="$listeners"
        />
    `,
    components: {
        
    },
    data: () => ({
        
    }),
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentZeroThemeContactForm = {
    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],    
    props: {
        subtitle: String,
        title: {
            type: String,
            default: 'MAIL US YOUR MESSAGE',
        },
        nameLabel: {
            type: String,
            default: 'Name',
        },
        emailLabel: {
            type: String,
            default: 'Email',
        },
        subjectLabel: {
            type: String,
            default: 'Subject',
        },
        messageLabel: {
            type: String,
            default: 'Your Need & Description',
        },
        sendButtonLabel: {
            type: String,
            default: 'Send message',
        },
    },
    template:  `
        <div>
            <base-info-card
                :title="title"
                :subtitle="subtitle"
                space="4"
                color="primary"
            />

            <base-text-field :label="nameLabel" />

            <base-text-field :label="emailLabel" />

            <base-text-field :label="subjectLabel" />

            <base-textarea
                class="mb-6"
                :label="messageLabel"
            />

            <base-btn
                :color="!theme.isDark ? 'accent' : 'white'"
                href="mailto:shop@vuetifyjs.com?subject=Zero%20Theme%20Question"
                outlined
                target="_blank"
            >
                {{sendButtonLabel}}
            </base-btn>
        </div>
    `,
    components: {
        'base-info-card': componentZeroThemeInfoCard,
        'base-text-field': componentZeroThemeTextField,
        'base-textarea': componentZeroThemeTextarea,
        'base-btn': componentZeroThemeBtn,
    },
    data: () => ({
        
    }),
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

// End zero theme components

Vue.component('template-hero1', {
    props: [],
    template:  `
                <section>
                    <v-row no-gutters>
                        <v-img
                            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
                            src="assets/images/stairway55516411920.jpg"
                        >
                            <v-theme-provider dark>
                                <v-container fill-height>
                                    <v-row
                                        align="center"
                                        class="white--text mx-auto"
                                        justify="center"
                                    >
                                        <v-col
                                            class="white--text text-center"
                                            cols="12"
                                            tag="h1"
                                        >
                                            <span
                                                :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                                                class="font-weight-light"
                                            >
                                                WELCOME TO
                                            </span>

                                            <br>

                                            <span
                                                :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                                                class="font-weight-black"
                                            >
                                                VUETIFY
                                            </span>

                                        </v-col>

                                        <v-btn
                                            class="align-self-end"
                                            fab
                                            outlined
                                            @click="$vuetify.goTo('#hero1-about-me')"
                                        >
                                            <v-icon>mdi-chevron-double-down</v-icon>
                                        </v-btn>
                                    </v-row>
                                </v-container>
                            </v-theme-provider>
                        </v-img>
                    </v-row>
                </section>
                `,
    data: function () {
        return {
            
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            
            `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
});

Vue.component('template-hero2', {
    props: {
        title: String,
        subtitle: String,
        buttonPrimary: Object,
        buttonSecondary: Object,
        background: {
            type: String,
            default: 'assets/images/stairway55516411920.jpg'
        },
    },
    template:  `
            <v-fade-transition mode="out-in">
                <section>
                    <v-img
                        :min-height="minHeight"
                        :src="background"
                        class="white--text"
                        gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
                    >
                        <v-container class="fill-height px-4 py-12">
                            <v-responsive
                                class="d-flex align-center"
                                height="100%"
                                max-width="700"
                                width="100%"
                            >
                                <h1 :class="headerClasses">{{ title }}</h1>

                                <p
                                    :class="bodyClasses"
                                    :style="bodyStyles"
                                    class="base-body body-1"
                                >
                                    {{ subtitle }}
                                </p>

                                <div
                                    :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
                                    class="d-flex flex-wrap"
                                >
                                    <v-btn
                                        v-if="buttonPrimary"
                                        v-bind="buttonPrimary"
                                        color="primary"
                                        depressed
                                        min-width="164"
                                        tile
                                        class="font-weight-bold"
                                        x-large
                                    >
                                        {{ buttonPrimary.name }}
                                    </v-btn>

                                    <span v-if="buttonSecondary" class="font-weight-bold ml-6 mr-4 my-4">or</span>

                                    <v-btn
                                        v-if="buttonSecondary"
                                        v-bind="buttonSecondary"
                                        color="primary"
                                        depressed
                                        min-width="164"
                                        tile
                                        x-large                                        
                                        :ripple="false"
                                        class="font-weight-bold pa-1"
                                        height="auto"
                                        text
                                    >
                                        {{ buttonSecondary.name }}
                                    </v-btn>
                                </div>
                            </v-responsive>
                        </v-container>
                    </v-img>
                </section>
                </v-fade-transition>
                `,
    data: function () {
        return {
            mobileBreakPoint: 768,
            size: 'display-2',
            mobileSize: 'display-1'
        }
    },
    computed: {
        minHeight () {
            const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

            return `calc(${height} - ${this.$vuetify.application.top}px)`
        },
        headerClasses () {
            const classes = [
              this.fontSize,
              `font-weight-black`,
              `mb-4`,
              `text-left`,
              false && 'white--text',
            ]
    
            return classes
        },
        fontSize () {
            return this.$vuetify.breakpoint.width >= this.mobileBreakPoint
              ? this.size
              : this.mobileSize
        },
        bodyClasses () {
            return [
              'grey--text',
              false ? 'text--lighten-1' : 'text--darken-1',
              `text-left`,
              `mb-10`,
            ]
        },
        bodyStyles () {
            return {
              maxWidth: `${ undefined }px`,
            }
        },
    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-hero3', {
    template:  `
        <v-row class="template-hero3" justify="space-between">
            <v-col cols="auto" md="8" class="mx-auto">
                <v-carousel
                    height="420"
                    hide-delimiter-background
                    delimiter-icon="mdi-minus"
                    v-model="banners.active"
                    cycle
                    interval="5000"
                >
                    <v-carousel-item
                        v-for="(item,i) in banners.images"
                        :key="i"
                        v-bind="item"
                    >
                        <v-img
                            class="white--text align-end"
                            height="420px"
                            :src="item.image"
                        >
                            <div class="fill-height bottom-gradient"><v-card-title>{{ item.title }}</v-card-title></div>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="auto" md="4" class="mx-auto">
                <!-- Small banners -->                
                <v-hover
                    v-slot:default="{ hover }"
                    v-for="(item, i) in smallBanners.slice(0, 2)" :key="i" 
                >
                    <v-card
                        :elevation="hover ? 16 : 0"
                        v-bind="item"
                    >
                        <v-img                        
                            class="white--text align-end"
                            height="200px"
                            :src="item.image"
                            :class="{ 'mt-5': i>0 }"
                        >
                            <div class="fill-height bottom-gradient"><v-card-title>{{ item.title }}</v-card-title></div>                    
                        </v-img>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    `,
    data: function () {
        return {
            banners: {
                active: 0,
                images: [
                    {
                        title: 'Samsung Galaxy S20',
                        image: 'assets/images/americawest46937311920.jpg',
                        href: '#',
                    },
                    {
                        title: 'Apple Iphone 12',
                        image: 'assets/images/bedroom56642211920.jpg',
                        href: '#',
                    },
                    {
                        title: 'Samsung Galaxy Note 20',
                        image: 'assets/images/canada18993281920.jpg',
                        href: '#',
                    },
                ],
            },

            smallBanners: [
                {
                    title: 'Samsung Galaxy S20',
                    image: 'assets/images/canal54882711920.jpg',
                    to: '#',
                },
                {
                    title: 'Apple Iphone 12',
                    image: 'assets/images/guggenheimmuseum27072581920.jpg',
                    href: '#',
                },
            ],
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-hero3 .bottom-gradient {
                background-image: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(255,255,255,0) 100%)
            }
        
            .template-hero3 .v-card--reveal {
                align-items: center;
                bottom: 0;
                justify-content: center;
                opacity: .8;
                position: absolute;
                width: 100%;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-hero51', {
    template:  `
        <v-theme-provider dark>
            <section class="template-hero51">
                <v-img
                    :height="$vuetify.breakpoint.mdAndUp ? 350 : 225"
                    :gradient="gradient"
                    :src="src"
                    color="#45516b"
                    flat
                    max-width="100%"
                    tile
                >
                    <v-row
                        v-if="title"
                        align="center"
                        class="ma-0 fill-height text-center"
                        justify="center"
                    >
                        <v-col cols="12">
                            <base-heading
                                :title="title"
                                space="2"
                                weight="500"
                            />

                            <base-divider
                                color="primary"
                                dense
                            />

                            <v-breadcrumbs
                                :items="items"
                                class="justify-center pa-0"
                                divider=">"
                            />
                        </v-col>
                    </v-row>
                </v-img>
            </section>
        </v-theme-provider>
    `,
    components: {
        'base-heading': componentZeroThemeHeading,
        'base-divider': componentZeroThemeDivider,
    },
    provide: {
        heading: { align: 'center' },
    },
    data: function () {
        return {
            title: 'ABOUT US',
        }
    },
    computed: {
        gradient() {
            // const color = `${this.$vuetify.theme.themes.light.secondary}CC`
            // const overlay = RGBAtoCSS(HexToRGBA(color))

            return `to top, rgba(5, 11, 31, 0.8), rgba(5, 11, 31, 0.8)`
        },
        src() {
            return 'assets/images/americawest46937311920.jpg'
        },
        items() {
            return [
                { text: 'HOME', href: '/' },
                { text: this.title },
            ]
        },
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-hero51 .v-breadcrumbs__item {
                color: #FFFFFF
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});


Vue.component('template-feature1', {
    props: [],
    template:  `
                <section
                    class="grey lighten-3"
                >
                    <div class="py-12"></div>

                    <v-container class="text-center">
                        <h2 class="display-2 font-weight-bold mb-3">VUETIFY FEATURES</h2>

                        <v-responsive
                            class="mx-auto mb-12"
                            width="56"
                        >
                            <v-divider class="mb-1"></v-divider>

                            <v-divider></v-divider>
                        </v-responsive>

                        <v-row>
                            <v-col
                                v-for="({ icon, title, text }, i) in features"
                                :key="i"
                                cols="12"
                                md="4"
                            >
                                <v-card
                                    class="py-12 px-4"
                                    color="grey lighten-5"
                                    flat
                                >
                                    <v-theme-provider dark>
                                        <div>
                                            <v-avatar
                                                color="primary"
                                                size="88"
                                            >
                                                <v-icon
                                                    large
                                                    v-text="icon"
                                                ></v-icon>
                                            </v-avatar>
                                        </div>
                                    </v-theme-provider>

                                    <v-card-title
                                        class="justify-center font-weight-black text-uppercase"
                                        v-text="title"
                                    ></v-card-title>

                                    <v-card-text
                                        class="subtitle-1"
                                        v-text="text"
                                    >
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>

                    <div class="py-12"></div>
                </section>
                `,
    data: function () {
        return {
            features: [
                {
                  icon: 'mdi-account-group-outline',
                  title: 'Vibrant Community',
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
                },
                {
                  icon: 'mdi-update',
                  title: 'Frequent Updates',
                  text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
                },
                {
                  icon: 'mdi-shield-outline',
                  title: 'Long-term Support',
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
                },
            ],
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            
            `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
});

Vue.component('template-feature2', {
    props: {
        title: String,
        subtitle: String,
        features: Array,
    },
    template:  `
        <base-section class="template-feature2">
            <base-section-heading :title="title">
                {{ subtitle }}
            </base-section-heading>

            <v-container>
            <v-row>
                <v-col
                v-for="(feature, i) in features"
                :key="i"
                cols="12"
                md="6"
                >
                <base-avatar-card
                    v-bind="feature"
                    align="left"
                    horizontal
                >
                    {{ feature.description }}
                </base-avatar-card>
                </v-col>
            </v-row>
            </v-container>
        </base-section>      
    `,
    components: {
        'base-section': componentZeroThemeSection,
        'base-section-heading': componentZeroThemeSectionHeading,
        'base-avatar-card': componentZeroThemeAvatarCard,
    },
    data: function () {
        return {
            
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-feature2 .body-1 {
                font-size: .9375rem!important;
            }
            .template-feature2 .body-1, .template-feature2 .body-2 {
                font-family: PT Sans,sans-serif!important;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-feature3', {
    template:  `
        <base-section
            class="template-feature3 secondary"
        >
            <v-responsive
                class="mx-auto"
                max-width="1350"
            >
                <v-container fluid>
                    <v-row>
                        <v-col
                            v-for="card in cards"
                            :key="card.title"
                            cols="12"
                            sm="4"
                            md="3"
                        >
                            <base-info-card
                                align="center"
                                dark
                                v-bind="card"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-responsive>
        </base-section>
    `,
    components: {
        'base-section': componentZeroThemeSection,
        'base-info-card': componentZeroThemeInfoCard,
    },
    data: function () {
        return {
            cards: [
                {
                  icon: 'mdi-keyboard-outline',
                  title: 'Trendy Design',
                  text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
                },
                {
                  icon: 'mdi-camera-outline',
                  title: 'Photography',
                  text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
                },
                {
                  icon: 'mdi-pencil-outline',
                  title: 'Brand Making',
                  text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
                },
                {
                  icon: 'mdi-puzzle-outline',
                  title: '24/7 Support',
                  text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
                },
            ],
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-feature3 .body-1 {
                font-size: .9375rem!important;
            }
            .template-feature3 .body-1, .template-feature3 .body-2 {
                font-family: PT Sans,sans-serif!important;
            }
            .template-feature3.secondary {
                background-color: #050b1f !important;
                border-color: #050b1f !important;
            }
            .template-feature3 .title {
                font-size: 1rem!important;
                letter-spacing: .1875rem!important;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-feature4', {
    template:  `
        <base-section class="template-feature4">
            <base-section-heading
                color="grey lighten-2"
                icon="mdi-vuetify"
                title="About our Product"
            />

            <v-container>
                <v-row>
                    <v-col
                        v-for="card in cards"
                        :key="card.title"
                        cols="12"
                        md="4"
                    >
                        <base-info-card v-bind="card" />
                    </v-col>
                </v-row>
            </v-container>
        </base-section>
    `,
    components: {
        'base-section': componentZeroThemeSection,
        'base-section-heading': componentZeroThemeSectionHeading,
        'base-info-card': componentZeroThemeInfoCard,
    },
    data: function () {
        return {
            cards: [
                {
                  title: 'Grow your Revenue',
                  subtitle: 'Best Productivity',
                  text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
                  callout: '01',
                },
                {
                  title: 'Affordable Prices',
                  subtitle: 'Special Offers',
                  text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
                  callout: '02',
                },
                {
                  title: 'Target Setting',
                  subtitle: 'Income Flow',
                  text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
                  callout: '03',
                },
            ],
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-feature4 .body-1 {
                font-size: .9375rem!important;
            }
            .template-feature4 .body-1, .template-feature4 .body-2 {
                font-family: PT Sans,sans-serif!important;
            }
            .template-feature4 .display-1, .template-feature4 .headline {
                letter-spacing: .1875rem!important;
                font-family: Work Sans,sans-serif!important;
            }
            .template-feature4 .title {
                font-size: 1rem!important;
                letter-spacing: .1875rem!important;
                font-family: Work Sans,sans-serif!important;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});


Vue.component('template-stat1', {
    props: [],
    template:  `
                <section>
                    <v-parallax
                        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
                        src="assets/images/notebook12805381920.jpg"
                    >
                        <v-container fill-height>
                            <v-row class="mx-auto">
                                <v-col
                                    v-for="[value, title] of stats"
                                    :key="title"
                                    cols="12"
                                    md="3"
                                >
                                    <div class="text-center">
                                        <div
                                            class="display-3 font-weight-black mb-4"
                                            v-text="value"
                                        ></div>

                                        <div
                                            class="title font-weight-regular text-uppercase"
                                            v-text="title"
                                        ></div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-parallax>
                </section>
                `,
    data: function () {
        return {
            stats: [
                ['24k', 'Github Stars'],
                ['330+', 'Releases'],
                ['1m', 'Downloads/mo'],
                ['5m', 'Total Downloads'],
            ],
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            
            `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
});


Vue.component('template-contact1', {
    props: [],
    template:  `
        <v-theme-provider dark>
            <base-section
                class="template-contact1 primary"
                space="40"
            >
                <v-container>
                    <v-row justify="center">
                    <v-col cols="10">
                        <base-title
                        :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
                        title="HAVE QUESTIONS? LET US KNOW!"
                        />

                        <base-body space="0">
                        <span class="white--text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor itaque modi ab accusantium architecto voluptates ipsa molestiae.
                        </span>
                        </base-body>
                    </v-col>

                    <v-col
                        cols="12"
                        md="2"
                    >
                        <base-btn
                        :block="$vuetify.breakpoint.smAndDown"
                        color="white"
                        href="mailto:shop@vuetifyjs.com?subject=Zero%20Theme%20Question"
                        large
                        outlined
                        target="_blank"
                        >
                        Contact Us
                        </base-btn>
                    </v-col>
                    </v-row>
                </v-container>
            </base-section>
        </v-theme-provider>
    `,
    components: {
        'base-section': componentZeroThemeSection,
        'base-title': componentZeroThemeTitle,
        'base-body': componentZeroThemeBody,
        'base-btn': componentZeroThemeBtn,
    },
    data: function () {
        return {
            
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-contact1 .body-1 {
                font-size: .9375rem!important;
            }
            .template-contact1 .body-1, .template-contact1 .body-2 {
                font-family: PT Sans,sans-serif!important;
            }
            .template-contact1 .title {
                font-size: 1rem!important;
                letter-spacing: .1875rem!important;
            }
            .template-contact1 .primary {
                background-color: #42a5f6 !important;
                border-color: #42a5f6 !important;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-contact2', {
    props: [],
    template:  `
        <v-theme-provider dark>
            <base-section
                class="template-contact2 accent text-center"
                space="56"
            >
                <base-icon class="mb-8">
                    mdi-twitter
                </base-icon>

                <base-section-heading
                    color="transparent"
                    title="Social Media"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur recusandae aut repudiandae illo error obcaecati dolores voluptate, tempore.
                </base-section-heading>

                <a
                    class="d-inline-block mb-8"
                    href="https://vuetifyjs.com"
                    style="text-decoration: none;"
                    target="_blank"
                >
                    https://vuetifyjs.com
                </a>

                <div class="py-4" />

                <v-btn
                    class="font-weight-bold"
                    color="white"
                    href="https://twitter.com/vuetifyjs"
                    light
                    min-width="168"
                    target="_blank"
                    x-large
                >
                    Follow Us

                    <v-icon right>
                    mdi-open-in-new
                    </v-icon>
                </v-btn>
            </base-section>
        </v-theme-provider>
    `,
    components: {
        'base-section': componentZeroThemeSection,
        'base-section-heading': componentZeroThemeSectionHeading,
        'base-icon': componentZeroThemeIcon,
        'base-title': componentZeroThemeTitle,
        'base-body': componentZeroThemeBody,
        'base-btn': componentZeroThemeBtn,
    },
    data: function () {
        return {
            
        }
    },
    provide: {
        heading: { align: 'center' },
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-contact2 .body-1, .template-contact2 .body-2 {
                font-family: PT Sans,sans-serif!important;
            }
            .template-contact2 .display-1, .template-contact2 .headline {
                letter-spacing: .1875rem!important;
            }
            .template-contact2.accent {
                background-color: #204165 !important;
                border-color: #204165 !important;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});


Vue.component('template-contact3', {
    props: {
        title: {
            type: String,
            default: 'KEEP IN TOUCH WITH US',
        },
        subtitle: String,
        contactTitle: {
            type: String,
            default: 'MAIL US YOUR MESSAGE',
        },
    },
    template:  `
        <base-section
            space="56"
            class="template-contact3"
        >
            <v-container>
                <v-row justify="space-between">
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <div>
                            <base-info-card
                                :title="title"
                                pace="6"
                            >
                                {{subtitle}}
                            </base-info-card>
                    
                            <base-business-contact dense />
                        </div>
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <base-contact-form :title="contactTitle" />
                    </v-col>
                </v-row>
            </v-container>
        </base-section>
    `,
    components: {
        'base-section': componentZeroThemeSection,
        'base-info-card': componentZeroThemeInfoCard,
        'base-business-contact': componentZeroThemeBusinessContact,
        'base-contact-form': componentZeroThemeContactForm,
    },
    data: function () {
        return {
            
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-contact3 .body-1, .template-contact3 .body-2 {
                font-family: PT Sans,sans-serif!important;
            }
            .template-contact3 .accent--text {
                color: #204165 !important;
                caret-color: #204165 !important;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-contact4', {
    template:  `
        <v-theme-provider dark>
            <base-section
                class="template-contact4 primary"
                space="36"
            >
                <v-row
                    align="center"
                    class="ma-0"
                    justify="center"
                >
                    <base-title
                    space="0"
                    title="GET OUR NEWSLETTER"
                    />

                    <v-responsive
                    class="px-4 mx-6"
                    max-width="600"
                    width="100%"
                    >
                    <base-text-field
                        hide-details
                        label="Your Email Address"
                    >
                        <template v-slot:append-outer>
                        <v-btn
                            class="ml-n1"
                            height="40"
                            outlined
                            style="margin-top: -7px;"
                        >
                            Subscribe
                        </v-btn>
                        </template>
                    </base-text-field>
                    </v-responsive>
                </v-row>
            </base-section>
        </v-theme-provider>
    `,
    components: {
        'base-section': componentZeroThemeSection,
        'base-title': componentZeroThemeTitle,
        'base-text-field': componentZeroThemeTextField,
    },
    data: function () {
        return {
            
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-contact4 .body-1, .template-contact4 .body-2 {
                font-family: PT Sans,sans-serif!important;
            }
            .template-contact4 .title {
                letter-spacing: .1875rem!important;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});


Vue.component('template-pricing1', {
    template:  `
        <base-section
            class="template-pricing1"
        >
            <v-img
                src="assets/images/logo.png"
                class="mx-auto mb-8"
                max-width="128"
            />

            <base-section-heading title="Feature Comparison">
                Get the PRO version of <strong>Zero</strong> and level up your theme<br>with additional components, pages, and Free updates.
            </base-section-heading>

            <v-container>
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col
                        cols="12"
                        md="7"
                    >
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th />
                                    <th class="body-1 font-weight-bold text-center">
                                    What's in the Demo?
                                    </th>
                                    <th class="body-1 font-weight-bold text-center">
                                    What's in the PRO version?
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="body-1">
                                <tr
                                    v-for="([name, one, two], i) in features"
                                    :key="i"
                                >
                                    <td v-text="name" />

                                    <td class="text-center font-weight-bold">
                                        <template v-if="typeof one === 'boolean'">
                                            <v-icon :color="one ? 'success' : 'error'">
                                            mdi-{{ one ? 'check' : 'close' }}
                                            </v-icon>
                                        </template>

                                        <template v-else>
                                            {{ one }}
                                        </template>
                                    </td>

                                    <td class="text-center font-weight-bold">
                                        <template v-if="typeof two === 'boolean'">
                                            <v-icon :color="two ? 'success' : 'error'">
                                            mdi-{{ two ? 'check' : 'close' }}
                                            </v-icon>
                                        </template>

                                        <template v-else>
                                            {{ two }}
                                        </template>
                                    </td>
                                </tr>
                            </tbody>
                        </v-simple-table>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-card
                            elevation="16"
                            class="mb-12"
                        >
                            <v-img
                            max-width="100%"
                            src="assets/images/notebook12805381920.jpg"
                            />
                        </v-card>

                        <div class="text-center">
                            <base-btn
                            :tile="false"
                            color="primary"
                            href="https://store.vuetifyjs.com/product/zero-theme-pro/?ref=vtyd-pro-page-features"
                            rounded
                            >
                            Buy Pro Now

                            <v-icon right>
                                mdi-rocket
                            </v-icon>
                            </base-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </base-section>
    `,
    components: {
        'base-section': componentZeroThemeSection,
        'base-section-heading': componentZeroThemeSectionHeading,
        'base-btn': componentZeroThemeBtn,
    },
    data: function () {
        return {
            features: [
                ['Components', 23, '40+'],
                ['Example Pages', 3, 10],
                ['Bugfixes and Issues', true, true],
                ['Vue CLI Support', true, true],
                ['News, Project, and Pricing Pages', false, true],
                ['6 Months Free Updates', false, true],
                ['Price', 'Free', '$60'],
            ],
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-pricing1 .body-1, .template-pricing1 .body-2 {
                font-family: PT Sans,sans-serif!important;
            }
            .template-pricing1 .title, .template-pricing1 .headline {
                letter-spacing: .1875rem!important;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});


Vue.component('template-clients1', {
    props: [],
    template:  `
        <base-section
            id="affiliates"
            class="grey lighten-4"
            space="36"
        >
            <v-container>
            <base-section-heading title="Who's using Zero?" />

            <v-slide-group>
                <template v-for="n in 6">
                <v-slide-item
                    :key="n"
                    class="align-self-center"
                >
                    <v-img
                    :src="'assets/images/logo-' + n + '.png'"
                    color="grey"
                    contain
                    height="40"
                    width="128"
                    />
                </v-slide-item>

                <v-responsive
                    v-if="n < 6"
                    :key="'divider-' + n"
                    class="text-center"
                    height="56"
                    width="48"
                >
                    <v-divider vertical />
                </v-responsive>
                </template>
            </v-slide-group>
            </v-container>
        </base-section>
    `,
    components: {
        'base-section': componentZeroThemeSection,
        'base-section-heading': componentZeroThemeSectionHeading,
    },
    data: function () {
        return {
            
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});


Vue.component('template-blog1', {
    props: [],
    template:  `
                <section>
                    <div class="py-12"></div>

                    <v-container>
                        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

                        <v-responsive
                            class="mx-auto mb-12"
                            width="56"
                        >
                            <v-divider class="mb-1"></v-divider>

                            <v-divider></v-divider>
                        </v-responsive>

                        <v-row>
                            <v-col
                                v-for="({ src, text, title }, i) in articles"
                                :key="i"
                                cols="12"
                                md="4"
                            >
                                <v-img
                                    :src="src"
                                    class="mb-4"
                                    height="275"
                                    max-width="100%"
                                ></v-img>

                                <h3
                                    class="font-weight-black mb-4 text-uppercase"
                                    v-text="title"
                                ></h3>

                                <div
                                    class="title font-weight-light mb-5"
                                    v-text="text"
                                ></div>

                                <v-btn
                                    class="ml-n4 font-weight-black"
                                    text
                                >
                                    Continue Reading
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>

                    <div class="py-12"></div>
                </section>
                `,
    data: function () {
        return {
            articles: [
                {
                  src: 'assets/images/canada18993281920.jpg',
                  title: 'Mobile first & Responsive',
                  text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
                },
                {
                  src: 'assets/images/bedroom56642211920.jpg',
                  title: 'Think outside the box',
                  text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
                },
                {
                  src: 'assets/images/americawest46937311920.jpg',
                  title: 'Small changes, big difference',
                  text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
                },
            ],
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            
            `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
});

Vue.component('template-blog2', {
    props: {
        excerptLength: {
            type: Number,
            default: 130
        },
        articles: Array,
        columns: {
            type: Number,
            default: 3
        },
    },
    template:  `
                <section class="template-blog2" style="background-color: white">
                    <div class="py-6"></div>

                    <v-container style="max-width: 1100px">
                        <h2 class="font-weight-bold mb-2 text-center text-h5 text-uppercase">Blog</h2>

                        <v-responsive
                            class="mx-auto mb-6"
                            width="56"
                        >
                            <v-divider class="mb-1"></v-divider>

                            <v-divider></v-divider>
                        </v-responsive>

                        <v-row>
                            <v-col v-for="({ src, text, title }, i) in articles" :key="i" cols="12" :md="12/columns" class="">
                                <v-card
                                    class="mx-auto my-6 card-shadow"
                                    max-width="374"
                                >
                                    <v-img
                                        height="250"
                                        :src="src"
                                    ></v-img>

                                    <v-card-title v-text="title"></v-card-title>

                                    <v-card-text>
                                        <div>{{ text | truncate(excerptLength) }}</div>
                                    </v-card-text>

                                </v-card>
                            </v-col>
                        </v-row>                        
                    </v-container>

                    <div class="py-6"></div>
                </section>
                `,
    data: function () {
        return {

        }
    },
    filters: {
        truncate: vuefilters.truncate
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            .template-blog2 .card-shadow {
                -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1) !important;
                box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1) !important;
            }    
        `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
});

// Material TIM theme template

var componentMaterialTimThemeMaterialCard = {
    props: {
        avatar: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: 'success',
        },
        icon: {
            type: String,
            default: undefined,
        },
        image: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
    },
    template:  `
        <v-card
            v-bind="$attrs"
            :class="classes"
            class="component-material-tim-theme-material-card v-card--material pa-3"
        >
            <div class="d-flex grow flex-wrap">
                <v-avatar
                    v-if="avatar"
                    size="128"
                    class="mx-auto v-card--material__avatar elevation-6"
                    color="grey"
                >
                    <v-img :src="avatar" />
                </v-avatar>

                <v-sheet
                    v-else
                    :class="{
                        'pa-7': !$slots.image
                    }"
                    :color="color"
                    :max-height="icon ? 90 : undefined"
                    :width="icon ? 'auto' : '100%'"
                    elevation="6"
                    class="text-start v-card--material__heading mb-n6 rounded"
                    dark
                >
                    <slot
                        v-if="$slots.heading"
                        name="heading"
                    />

                    <slot
                        v-else-if="$slots.image"
                        name="image"
                    />

                    <div
                        v-else-if="title && !icon"
                        class="display-1 font-weight-light"
                        v-text="title"
                    />

                    <v-icon
                        v-else-if="icon"
                        size="32"
                        v-text="icon"
                    />

                    <div
                        v-if="text"
                        class="headline font-weight-thin"
                        v-text="text"
                    />
                </v-sheet>

                <div
                    v-if="$slots['after-heading']"
                    class="ml-6"
                >
                    <slot name="after-heading" />
                </div>

                <div
                    v-else-if="icon && title"
                    class="ml-4"
                >
                    <div
                        class="card-title font-weight-light"
                        v-text="title"
                    />
                </div>
            </div>

            <slot />

            <template v-if="$slots.actions">
                <v-divider class="mt-2" />

                <v-card-actions class="pb-0">
                    <slot name="actions" />
                </v-card-actions>
            </template>
        </v-card>
    `,
    data: function () {
        return {
            
        }
    },
    computed: {
        classes() {
            return {
                'v-card--material--has-heading': this.hasHeading,
            }
        },
        hasHeading() {
            return Boolean(this.$slots.heading || this.title || this.icon)
        },
        hasAltHeading() {
            return Boolean(this.$slots.heading || (this.title && this.icon))
        },
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .component-material-tim-theme-material-card .v-card--material__avatar {
                position: relative;
                top: -64px;
                margin-bottom: -32px;
            }
            .component-material-tim-theme-material-card .v-card--material__heading {
                position: relative;
                top: -40px;
                transition: .3s ease;
                z-index: 1;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

var componentMaterialTimThemeMaterialStatsCard = {
    props: {
        icon: {
            type: String,
            required: true,
        },
        subIcon: {
            type: String,
            default: undefined,
        },
        subIconColor: {
            type: String,
            default: undefined,
        },
        subTextColor: {
            type: String,
            default: undefined,
        },
        subText: {
            type: String,
            default: undefined,
        },
        title: {
            type: String,
            default: undefined,
        },
        value: {
            type: String,
            default: undefined,
        },
        smallValue: {
            type: String,
            default: undefined,
        },
    },
    template:  `
        <base-material-card
            :icon="icon"
            class="component-material-tim-theme-material-stats-card v-card--material-stats"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <template v-slot:after-heading>
                <div class="ml-auto text-right">
                    <div
                        class="body-3 grey--text font-weight-light"
                        v-text="title"
                    />

                    <h3 class="text-h5 font-weight-light text--primary">
                        {{ value }} <small>{{ smallValue }}</small>
                    </h3>
                </div>
            </template>

            <v-col
                cols="12"
                class="px-0"
            >
                <v-divider />
            </v-col>

            <v-icon
                :color="subIconColor"
                size="16"
                class="ml-2 mr-1"
            >
                {{ subIcon }}
            </v-icon>

            <span
                :class="subTextColor"
                class="caption grey--text font-weight-light"
                v-text="subText"
            />
        </base-material-card>
    `,
    components: {
        'base-material-card': componentMaterialTimThemeMaterialCard,
    },
    data: function () {
        return {
            
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .component-material-tim-theme-material-stats-card.v-card--material-stats {
                display: flex;
                flex-wrap: wrap;
                position: relative;
                margin-top: 30px;
                margin-bottom: 15px;
            }
            .component-material-tim-theme-material-stats-card.v-card--material-stats > div:first-child {
                justify-content: space-between
            }
            .component-material-tim-theme-material-stats-card .v-card {
                border-radius: 4px;
                flex: 0 1 auto;
            }
            .component-material-tim-theme-material-stats-card .v-card__text {
                display: inline-block
                flex: 1 0 calc(100% - 120px)
                position: absolute
                top: 0
                right: 0
                width: 100%
            }
            .component-material-tim-theme-material-stats-card .v-card__actions {
                flex: 1 0 100%
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
};

// End Material TIM theme template

Vue.component('template-dashboard1', {
    template:  `
        <v-container
            fluid
            tag="section"
        >
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    lg="3"
                >
                    <base-material-stats-card
                        color="info"
                        icon="mdi-twitter"
                        title="Followers"
                        value="+245"
                        sub-icon="mdi-clock"
                        sub-text="Just Updated"
                    />
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    lg="3"
                >
                    <base-material-stats-card
                        color="primary"
                        icon="mdi-poll"
                        title="Website Visits"
                        value="75.521"
                        sub-icon="mdi-tag"
                        sub-text="Tracked from Google Analytics"
                    />
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    lg="3"
                >
                    <base-material-stats-card
                        color="success"
                        icon="mdi-store"
                        title="Revenue"
                        value="$ 34,245"
                        sub-icon="mdi-calendar"
                        sub-text="Last 24 Hours"
                    />
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    lg="3"
                >
                    <base-material-stats-card
                        color="orange"
                        icon="mdi-sofa"
                        title="Bookings"
                        value="184"
                        sub-icon="mdi-alert"
                        sub-icon-color="red"
                        sub-text="Get More Space..."
                    />
                </v-col>
            </v-row>
        </v-container>
    `,
    components: {
        'base-material-stats-card': componentMaterialTimThemeMaterialStatsCard,
    },
    data: function () {
        return {
            
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

// Footer section

var templateFooter1Tags = {
    props: [],
    template:  `
                <v-container class="pa-0">
                    <h2 class="subheading text-uppercase font-weight-medium mb-3">Tags</h2>

                    <v-chip
                        v-for="(category, i) in categories"
                        :key="i"
                        class="mr-2"
                        color="secondary"
                        label
                        small
                        tag
                        text-color="white"
                    >
                        {{ category.text }}
                    </v-chip>
                </v-container>
                `,
    props: {
        
    },
    data: function () {
        return {
            categories: [
                {
                    "text": "Travel",
                    "href": "#!"
                },
                {
                    "text": "Leisure",
                    "href": "#!"
                },
                {
                    "text": "Political",
                    "href": "#!"
                },
                {
                    "text": "Cooking",
                    "href": "#!"
                },
            ]
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            
            `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
}

var templateFooter1NewestPosts = {
    props: [],
    template:  `
                <v-container class="pa-0">
                    <h2 class="subheading text-uppercase font-weight-medium mb-3">Newest Blog Posts</h2>

                    <v-row
                        v-for="(article, i) in articles.slice(0, 3)"
                        :key="i"
                        align="center"
                        class="mb-2"
                    >
                        <v-col
                            class="d-flex"
                            cols="12"
                        >
                            <v-img
                                :src="'assets/images/' + article.hero"
                                class="mr-3"
                                height="36"
                                max-width="36"
                            />

                            <div>
                                <div class="subheading">
                                    {{ article.title }}
                                </div>

                                <div class="caption">
                                    Date
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
                `,
    props: {
        
    },
    data: function () {
        return {
            articles: [
                {
                  "title": "To the ancient ruins",
                  "author": "Rachel L",
                  "category": "Travel",
                  "hero": "canal54882711920.jpg"
                },
                {
                  "title": "New fashion trends",
                  "author": "Rachel L",
                  "category": "Travel",
                  "hero": "guggenheimmuseum27072581920.jpg"
                },
                {
                  "title": "Go on a vacation",
                  "author": "Rachel L",
                  "category": "Travel",
                  "hero": "stairway55516411920.jpg"
                }
            ]
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            
            `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
}

var templateFooter1Instagram = {
    props: [],
    template:  `
                <v-container class="pa-0">
                    <h2 class="subheading text-uppercase font-weight-medium mb-3">On Instagram</h2>

                    <v-row>
                        <v-col
                            v-for="(post, i) in posts"
                            :key="i"
                            cols="4"
                        >
                            <v-card
                                flat
                                tile
                                :href="post.href"
                                color="grey lighten-2"
                                height="88"
                                tag="a"
                            >
                                <v-img
                                    v-if="post.src"
                                    :src="'assets/images/' + post.src"
                                    height="100%"
                                />
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                `,
    props: {
        
    },
    data: function () {
        return {
            posts: [
                { src: 'americawest46937311920.jpg' },
                { src: 'bedroom56642211920.jpg' },
                { src: 'canada18993281920.jpg' },
                { src: 'canal54882711920.jpg' },
                { src: 'guggenheimmuseum27072581920.jpg' },
                { src: 'stairway55516411920.jpg' },
            ],
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            
            `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
}

Vue.component('template-footer1', {
    template:  `
                <div>
                    <v-container
                        id="subscribe"
                        tag="section"
                    >
                        <v-card
                            flat
                            tile
                            color="rgba(203, 170, 92, 0.51)"
                            class="pa-3"
                        >
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        md="5"
                                    >
                                        <h2 class="subheading text-uppercase font-weight-medium mb-3">
                                            Subscribe
                                        </h2>

                                        <p>
                                        Enter your email address to subscribe to this blog
                                        and receive notifications of new posts by email.
                                        </p>

                                        <v-row class="pa-2">
                                            <v-responsive
                                                class="overflow-visible mr-2"
                                                max-width="400"
                                            >
                                                <v-text-field
                                                    hide-details
                                                    label="Your Email Address"
                                                    solo
                                                />
                                            </v-responsive>

                                            <v-btn
                                                :block="$vuetify.breakpoint.xsOnly"
                                                class="ma-0"
                                                color="secondary"
                                                style="height: 48px"
                                            >
                                                Subscribe
                                            </v-btn>
                                        </v-row>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        md="6"
                                        offset-md="1"
                                    >
                                        <h2 class="subheading text-uppercase font-weight-medium mb-3">Contact</h2>

                                        <v-list class="transparent">
                                        <v-list-item>
                                            <v-list-item-avatar
                                            color="primary"
                                            >
                                            <v-icon
                                                class="elevation-4"
                                                dark
                                            >
                                                mdi-email-outline
                                            </v-icon>
                                            </v-list-item-avatar>

                                            <v-list-item-title>EMAIL</v-list-item-title>

                                            <v-list-item-subtitle>
                                            THEARTOFTRAVEL@GMAIL.COM
                                            </v-list-item-subtitle>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-avatar color="primary">
                                            <v-icon
                                                class="elevation-4"
                                                dark
                                            >
                                                mdi-map-marker
                                            </v-icon>
                                            </v-list-item-avatar>

                                            <v-list-item-title>ADDRESS</v-list-item-title>

                                            <v-list-item-subtitle>
                                            1234 WORLD DR. HERE, TX 76123
                                            </v-list-item-subtitle>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-avatar color="primary">
                                            <v-icon
                                                class="elevation-4"
                                                dark
                                            >
                                                mdi-phone
                                            </v-icon>
                                            </v-list-item-avatar>

                                            <v-list-item-title>PHONE</v-list-item-title>

                                            <v-list-item-subtitle>
                                            555-789-1234
                                            </v-list-item-subtitle>
                                        </v-list-item>
                                        </v-list>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-container>

                    <v-container
                        id="social"
                        tag="section"
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                md="4"
                            >
                                <instagram />
                            </v-col>

                            <v-col
                                cols="12"
                                md="4"
                            >
                                <newest-posts />
                            </v-col>

                            <v-col
                                cols="12"
                                md="4"
                            >
                                <tags />
                            </v-col>
                        </v-row>
                    </v-container>

                    <v-footer
                        class="py-4"
                        dark
                        height="auto"
                    >
                        <v-container class="mx-auto">
                            <v-row>
                                <v-col cols="9">
                                    <v-btn
                                        v-for="(item, i) in items"
                                        :key="i"
                                        :href="item.href"
                                        fab
                                        small
                                        class="ml-0 mr-3"
                                        color="primary"
                                        target="_blank"
                                        style="border-radius: 2px;"
                                    >
                                        <v-icon v-text="item.icon" />
                                    </v-btn>
                                </v-col>

                                <v-spacer />

                                <v-btn
                                    fab
                                    small
                                    color="primary"
                                    class="mr-0"
                                    title="Go to top"
                                    @click="$vuetify.goTo(0)"
                                    style="border-radius: 2px;"
                                >
                                    <v-icon>mdi-chevron-up</v-icon>
                                </v-btn>
                            </v-row>
                        </v-container>
                    </v-footer>
                </div>
                `,
    components: {
        NewestPosts: templateFooter1NewestPosts,
        Instagram: templateFooter1Instagram,
        Tags: templateFooter1Tags,
    },
    data: function () {
        return {
            items: [
                {
                  href: '#!',
                  icon: 'mdi-twitter',
                },
                {
                  href: '#!',
                  icon: 'mdi-instagram',
                },
                {
                  href: '#!',
                  icon: 'mdi-facebook',
                },
                {
                  href: '#!',
                  icon: 'mdi-google-plus',
                },
                {
                  href: '#!',
                  icon: 'mdi-reddit',
                },
                {
                  href: '#!',
                  icon: 'mdi-discord',
                },
                {
                  href: '#!',
                  icon: 'mdi-pinterest',
                },
            ],
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        // Create style
        var styleEl = document.createElement('style');

        styleEl.innerHTML  = `
            
            `;

        // Scoped style, thanks to scoper library
        styleEl.setAttribute('scoped', '')
        this.$el.prepend(styleEl);
    },
    methods: {
        
    }
});

Vue.component('template-footer2', {
    template:  `
        <v-theme-provider dark>
            <base-section
                class="template-footer2 grey darken-4"
            >
                <v-responsive
                    class="mx-auto"
                    max-width="1400"
                >
                    <v-container fluid>
                        <v-row>
                            <v-col
                                cols="12"
                                md="3"
                            >
                                <div>
                                    <v-img
                                        src="assets/images/logo.png"
                                        contain
                                        max-width="128"
                                        min-height="78"
                                        width="100%"
                                    />
                            
                                    <base-title
                                        size="body-1"
                                        space="4"
                                        title="MULTI-PURPOSE THEME"
                                        weight="regular"
                                    />
                            
                                    <base-body>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.
                                    </base-body>
                            
                                    <base-btn
                                        class="mb-12"
                                        color="white"
                                        outlined
                                    >
                                        More Info
                                    </base-btn>
                                </div>
                            </v-col>

                            <v-col
                                cols="12"
                                md="3"
                            >
                                <base-info-card title="Contact" />

                                <base-business-contact dense />
                            </v-col>

                            <v-col
                                cols="12"
                                md="3"
                            >
                                <base-info-card title="Features">
                                    <a
                                        v-for="feature in features"
                                        :key="feature"
                                        :text="feature"
                                        class="mb-8 grey--text body-1 d-block text-none"
                                        href="#"
                                        v-html="'&rsaquo; ' + feature"
                                    />
                                </base-info-card>
                            </v-col>

                            <v-col
                                cols="12"
                                md="3"
                            >
                                <base-info-card title="Instagram">
                                    <v-row dense>
                                        <v-col
                                            v-for="(image, n) in instagrams"
                                            :key="n"
                                            cols="auto"
                                        >
                                            <v-img
                                                :src="image"
                                                color="grey lighten-1"
                                                width="96"
                                                tile
                                            />
                                        </v-col>
                                    </v-row>
                                </base-info-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-responsive>
            </base-section>
        </v-theme-provider>
    `,
    components: {
        'base-section': componentZeroThemeSection,
        'base-title': componentZeroThemeTitle,
        'base-body': componentZeroThemeBody,
        'base-info-card': componentZeroThemeInfoCard,
        'base-business-contact': componentZeroThemeBusinessContact,
        'base-btn': componentZeroThemeBtn,
    },
    data: function () {
        return {
            features: [
                'Zero Installation',
                'Easy Customization',
                'User Friendly Design',
                '24/7 Support Desk',
                'SEO Optimized',
            ],
            instagrams: [
                'assets/images/americawest46937311920.jpg',
                'assets/images/bedroom56642211920.jpg',
                'assets/images/canada18993281920.jpg',
                'assets/images/canal54882711920.jpg',
                'assets/images/guggenheimmuseum27072581920.jpg',
                'assets/images/stairway55516411920.jpg',
            ]
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-footer2 .body-1, .template-footer2 .body-2 {
                font-family: PT Sans,sans-serif!important;
                font-size: .9375rem!important;
            }
            .template-footer2 .title, .template-footer2 .headline {
                font-size: 1rem!important;
                letter-spacing: .1875rem!important;
            }
            .template-footer2 a {
                text-decoration: none
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-footer3', {
    template:  `
        <v-footer
            color="grey darken-4"
            dark
            min-height="72"
            class="template-footer3"
        >
            <v-container>
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                >
                <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
                    <template v-for="(s, i) in social">
                        <a
                            :key="s"
                            class="white--text pa-1 pa-md-0"
                            href="#"
                            v-text="s"
                        />

                        <v-responsive
                            v-if="i < social.length - 1"
                            :key="'divider-' + s"
                            class="mx-4 shrink hidden-sm-and-down"
                            max-height="24"
                        >
                            <v-divider vertical />
                        </v-responsive>
                    </template>
                </div>
                </v-col>

                <v-col
                class="text-center text-md-right"
                cols="12"
                md="6"
                >
                Copyright &copy; 2020 Vuetify, LLC
                </v-col>
            </v-row>
            </v-container>
        </v-footer>
    `,
    components: {
        'base-divider': componentZeroThemeDivider,
    },
    data: function () {
        return {
            social: [
                'Facebook',
                'Twitter',
                'Instagram',
                'Linkedin',
            ],
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-footer3 a, .template-footer3 div {
                font-family: PT Sans,sans-serif!important;
                text-decoration: none
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-feature5', {
    template:  `
        <section class="template-feature5 bg-light mt-10 pt-13">
            <h1 class="text-uppercase headline font-weight-medium mb-2 text-center">
                Theme Features
            </h1>
            <p class="body-1 mx-auto grey--text text--darken-1 text-center mb-10" style="max-width: 700px;">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga.
            </p>

            <v-container style="max-width: 1200px">
                                
                <v-row>
                    <v-col cols="12" md="6">
                        <v-card
                            color="#1F7087"
                            dark
                        >
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div class="d-flex">
                                    <v-responsive :aspect-ratio="16/9">
                                        <v-avatar
                                            class="ma-3"
                                            size="125"
                                            tile
                                        >
                                            <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                                        </v-avatar>
                                    </v-responsive>
                                    
                                    <div>
                                        <v-card-title
                                            class="headline"
                                        >Supermodel</v-card-title>
                        
                                        <v-card-subtitle>Foster the People Foster the People Foster the People</v-card-subtitle>
                        
                                        <v-card-actions>
                                            <v-btn
                                                class="ml-2 mt-5"
                                                outlined
                                                rounded
                                                small
                                            >
                                                START RADIO
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                </div>
                    
                                <v-avatar
                                    class="ma-3"
                                    size="125"
                                    tile
                                >
                                    <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                                </v-avatar>
                            </div>
                        </v-card>
                    </v-col>

                    <v-col
                    v-for="(feature, i) in features"
                    :key="i"
                    cols="12"
                    md="6"
                    >
                    
                    <base-avatar-card
                        v-bind="feature"
                        align="left"
                        horizontal
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!
                    </base-avatar-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>      
    `,
    components: {
        'base-section-heading': componentZeroThemeSectionHeading,
        'base-avatar-card': componentZeroThemeAvatarCard,
    },
    data: function () {
        return {
            features: [
                {
                  title: 'Pixel Perfect Design',
                  icon: 'mdi-fountain-pen-tip',
                },
                {
                  title: 'Retina Ready',
                  icon: 'mdi-cellphone',
                },
                {
                  color: 'primary',
                  dark: true,
                  title: 'Easily Customizable',
                  icon: 'mdi-pencil-box-outline',
                },
                {
                  title: 'Image Parallax',
                  icon: 'mdi-image-size-select-actual',
                },
                {
                  title: 'Seo Optimized',
                  icon: 'mdi-ice-pop',
                },
                {
                  title: '24/7 Support',
                  icon: 'mdi-help-circle-outline',
                },
            ],
        }
    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-feature5.bg-light {
                background-color: #f4f8fa !important;
            }
            .template-feature5 .body-1 {
                font-size: .9375rem!important;
            }
            .template-feature5 .body-1, .template-feature5 .body-2 {
                font-family: PT Sans,sans-serif!important;
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-ecommerce1', {
    template:  `
        <div class="row" style="background-color: #eff0f5">
            <div class="col-md-3 col-sm-3 col-xs-12">
                <v-card outlined>
                    <v-card-title>Bộ lọc</v-card-title>
                    <v-divider></v-divider>

                    <!-- Category -->
                    <v-select 
                        class="px-4 py-4"
                        v-model="filterForm.category" 
                        :items="categories" 
                        item-text="name"
                        item-value="code"
                        label="Danh mục"
                        hide-details="auto"
                        outlined 
                        dense
                        clearable
                    ></v-select>

                    <!-- Price -->
                    <v-divider></v-divider>                
                    <v-card-title class="pb-0">Mức giá</v-card-title>
                    <v-container class="pt-0" fluid>
                        <v-radio-group
                            v-model="filterForm.price" 
                        >
                            <v-radio 
                                v-for="(item) in filters.prices"
                                :key="item.value"
                                :label="item.label" 
                                :value="item.value"
                                hide-details 
                            ></v-radio>
                        </v-radio-group>
                    </v-container>

                    <!-- Filters -->
                    <v-card-title class="pb-0">Thương hiệu</v-card-title>
                    <v-container class="pt-0" fluid>
                        <v-checkbox
                            v-for="(item) in filters.phone.brand"
                            :key="item"
                            v-model="filterForm.phone.brand" 
                            :label="item" 
                            :value="item"
                            hide-details 
                            >
                        </v-checkbox>
                    </v-container>

                    <div class="px-4 mb-4">
                        <v-btn @click="pushRoute" class="" block depressed rounded color="primary">
                            Áp dụng
                        </v-btn>
                        <v-btn class="mt-2" block outlined rounded color="primary" dark @click="clearFilter">Bỏ điều kiện lọc</v-btn>
                    </div>

                </v-card>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12">

                <!-- <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs> -->

                <v-row dense>
                    <v-col cols="12" sm="8" class="pt-4">
                        <!-- <small>Showing 1-12 of 200 products</small> -->
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-select 
                            class="pa-0" 
                            v-model="options.sort" 
                            :items="sort.options" 
                            item-text="text"
                            :item-value="sortValue"
                            label="Sắp xếp"
                            return-object
                            style="margin-bottom: -20px;" 
                            outlined 
                            dense
                            @change="pushRoute"
                        ></v-select>
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <div class="row">
                    <div class="col-md-3 col-sm-6 col-xs-12" v-for="(pro, i) in products" :key="i">
                    <!-- <v-hover v-slot:default="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                        <v-img
                            class="white--text align-end"
                            :aspect-ratio="16/9"
                            height="200px"
                            :src="pro.src"
                        >
                            <v-card-title>{{pro.category}} </v-card-title>
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                <v-btn v-if="hover" href="/product" class="" outlined>VIEW</v-btn>
                            </div>

                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="text--primary">
                            <div><a href="/product" style="text-decoration: none">{{pro.name}}</a></div>
                            <div>{{pro.price}} đ</div>
                        </v-card-text>
                        </v-card>
                    </v-hover> -->

                        <v-hover
                            v-slot:default="{ hover }"
                        >
                            <v-card
                                width="200px"
                                :elevation="hover ? 16 : 0"
                                :to="pro.href"
                            >
                                <v-img
                                    :src="(pro.attachments && pro.attachments[0] && pro.attachments[0].attachmentSource) ? pro.attachments[0].attachmentSource : ''"
                                    position="center center" aspect-ratio="1"
                                ></v-img>

                                <v-card-title class="subtitle-1">
                                    {{ pro.name }}
                                </v-card-title>

                                <v-card-subtitle>
                                    <template>
                                        {{ pro.brand }}
                                    </template>
                                </v-card-subtitle>

                                <v-card-text class="text--primary">
                                    <div>{{pro.price}} đ</div>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </div>
                </div>

                <div class="text-center mt-12">
                    <v-pagination
                        v-model="options.page"
                        :length="pagination.pageCount"
                        circle
                        @input="pushRoute"
                    ></v-pagination>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            categories: [
                {
                    name: 'Điện Thoại - Máy Tính Bảng',
                    code: 'dien-thoai-may-tinh-bang',
                    icon: 'mdi-tablet-cellphone',
                    iconColor: 'teal',
                    href: ''
                },            
                {
                    name: 'Điện Tử - Điện Lạnh',
                    code: 'dien-tu-dien-lanh',
                    icon: 'mdi-television',
                    iconColor: 'cyan',
                    href: ''
                },
            ],

            products:[
                {
                    id: '1',
                    href: '/samsung',
                    name: 'Samsung Galaxy S20',
                    brand: 'Samsung',
                    price: '19 600 000',
                    attachments: [
                        {
                            attachmentSource: 'assets/images/computer29822701920.jpg',
                        }
                    ]
                }
            ],

            options: {
                page: 1,
                limit: 12,
                sort: {
                    text: "Mặc định",
                    value: 'id',
                    descending: false,
                }
            },

            pagination: {
                total: 1,
                pageCount: 6,
            },

            sort: {
                options: [
                    {text: 'Mặc định', value: 'id', descending: false},
                    // {text: 'Mức độ phổ biến', value: 'id'},
                    // {text: 'Mức độ liên quan', value: 'id'},
                    {text: 'Giá: Thấp lên cao', value: 'price', descending: false},
                    {text: 'Giá: Cao xuống thấp', value: 'price', descending: true},
                ],
            },

            filters: {
                prices: [
                    {
                        label: 'Tất cả',
                        value: 'all'
                    },
                    {
                        label: 'Dưới 2 triệu',
                        value: 'duoi-2-trieu'
                    },
                    {
                        label: 'Dưới 4 triệu',
                        value: 'duoi-4-trieu'
                    },
                ],
                
                phone: {
                    brand: [
                        "Apple", "Samsung", "Oppo"
                    ],
                }            
            },

            filterForm: {
                category: null,
                price: 'all',
                query: '',

                phone: {
                    brand: [],
                    price: 'all',
                }
            },
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        getRouteParams(route) {
            let params = {
                category    : route.params.category || 'all'
            };
            return params;
        },

        getRouteQuery(route) {
            let query = {
                query       : route.query.q || '',
                page        : parseInt(route.query.page) || 1,
                limit       : parseInt(route.query.limit) || 12,
                sort        : route.query.sort || 'id',
                descending  : (route.query.descending === true || route.query.descending === 'true') || false,
                price       : route.query.price || 'all',
            };
            return query;
        },

        buildRouteParams() {
            let params = {
                category: this.filterForm.category || 'all'
            };
            return params;
        },

        buildRouteQuery() {
            let query = {
                q           : this.filterForm.query,
                page        : this.options.page,
                limit       : this.options.limit,
                sort        : this.options.sort.value,
                descending  : this.options.sort.descending,
                price       : this.filterForm.price,
            };

            // Remove empty value from query
            for (var propName in query) {
                if (query[propName] === null || query[propName] === undefined || query[propName] === '') {
                    delete query[propName];
                }
            }
            
            return query;
        },

        init(route) {
            // Get parameters from url
            let params = this.getRouteParams(route);
            let query = this.getRouteQuery(route);
            
            this.filterForm.category = params.category;
            this.filterForm.query = query.query;
            this.options.page = query.page;
            this.options.limit = query.limit;
            this.filterForm.price = query.price;

            // Select sort
            for(let i=0; i<this.sort.options.length; i++) {
                let item = this.sort.options[i];
                if(item.value == query.sort && item.descending == query.descending) {
                    this.options.sort = item;
                    break;
                }
            }

            if(params.category) {
                this.getProducts(params.category);
            } else {
                this.getProducts('all');
            }
        },

        pushRoute() {
            let params = this.buildRouteParams();
            let query = this.buildRouteQuery();

            this.$router.push({ path: `/${params.category}`, query: query }, () => {}, (e) => {console.log(e)});
        },

        getProducts(category) {
            if(!category) {
                return;
            }
            this.category = category;

            let searchCondition = this.buildRouteQuery()

            // Parse price
            if(searchCondition.price === 'duoi-2-trieu') {
                searchCondition.priceTo = '2000000';
            } else if(searchCondition.price === '2m-to-4m') {
                searchCondition.priceFrom = '2000000';
                searchCondition.priceTo = '4000000';
            } else if(searchCondition.price === '4m-to-7m') {
                searchCondition.priceFrom = '4000000';
                searchCondition.priceTo = '7000000';
            } else if(searchCondition.price === '7m-to-10m') {
                searchCondition.priceFrom = '7000000';
                searchCondition.priceTo = '10000000';
            } else if(searchCondition.price === 'over-10m') {
                searchCondition.priceFrom = '10000000';
            }
            delete searchCondition.price;

            // TODO: Search for products
            
        },

        sortValue(item) {
            return item.value + (item.descending?'-desc':'-asc');
        },

        clearFilter() {
            this.filterForm.price = 'all';
        },
    }
});

Vue.component('template-single-product1', {
    template:  `
        <div style="background-color: #eff0f5">
        <v-container>
            <v-card class="elevation-0">
                <v-container>
                    <v-row justify="space-between">
                        <v-col cols="auto" md="6" class="mx-auto">
                            <v-carousel 
                                hide-delimiters
                                height="400"
                                v-model="banners.active"
                                cycle
                                interval="5000"
                            >
                                <v-carousel-item
                                    v-for="(item,i) in item.attachments"
                                    :key="i"
                                >
                                    <v-img :src="item.attachmentSource" position="center center" aspect-ratio="1"></v-img>
                                </v-carousel-item>
                            </v-carousel>

                            <v-slide-group
                                v-model="banners.active"
                                class="py-4"
                                mandatory
                                show-arrows
                                center-active
                                ref="bannerSlideGroup"
                                @change="onChanged"
                            >
                                <v-slide-item
                                    v-for="(item,i) in item.attachments"
                                    :key="i"
                                    v-slot:default="{ active, toggle }"                                
                                >
                                    <v-card
                                        :color="active ? 'primary' : 'grey lighten-1'"
                                        class="ma-2"
                                        height="60"
                                        width="60"
                                        @click="toggle"
                                    >                                    
                                        <v-img
                                            height="60"
                                            width="60"
                                            position="center center"
                                            :src="item.attachmentSource"
                                            :gradient="active ? '' : 'to top right, rgba(25,32,72,.5), rgba(25,32,72,.5)'"
                                            :style="active ? 'border: 1px solid orange' : ''"
                                        ></v-img>
                                    </v-card>
                                </v-slide-item>
                            </v-slide-group>
                        </v-col>

                        <v-col
                            cols="auto"
                            md="6"
                            class="mx-auto"
                        >
                            <v-card-title class="headline">{{ item.name }}</v-card-title>

                            <v-card-text>
                                <div class="d-flex justify-center align-center">
                                    <div class="subtitle-1 orange--text text--darken-4">{{ item.price }} đ</div>
                                    <v-spacer></v-spacer>
                                    <v-rating
                                        :value="4.5"
                                        color="amber"
                                        dense
                                        half-increments
                                        readonly
                                        size="14"
                                    ></v-rating>

                                    <div class="grey--text ml-4">4.5 (413)</div>
                                </div>

                                <div class="my-4 subtitle-1 grey--text">
                                    {{ item.category }}
                                </div>

                                <div>

                                    <v-simple-table>
                                        <template v-slot:default>
                                            <tbody>
                                                <tr v-for="item in descriptionTable.slice(0, 5)" :key="item.name">
                                                <td>{{ item.name }}</td>
                                                <td>{{ item.value }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>

                                </div>

                                <div>
                                    <v-row justify="space-between">
                                        <v-col cols="6" md="6" class="mx-auto">
                                            <v-btn class="" block outlined rounded color="primary" dark @click="$vuetify.goTo('#mo-ta')">Tìm hiểu thêm</v-btn>                                  
                                        </v-col>
                                        <v-col cols="6" md="6" class="mx-auto">
                                            <v-btn class="" block depressed rounded color="primary">
                                                Liên hệ
                                            </v-btn>                                        
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>

            <v-row class="mx-n2" id="mo-ta">
                <v-col
                    class="flex-grow-1 px-2 mt-2"
                >
                    <v-card
                        class="pa-2 elevation-0 mt-4"
                    >
                        <v-card-title>
                            Mô tả
                        </v-card-title>

                        <v-card-text>
                            <div class="black--text" style="white-space: pre-line">{{ item.description }}</div>
                            <v-simple-table class="mt-4">
                                <template v-slot:default>
                                    <tbody>
                                        <tr v-for="item in descriptionTable" :key="item.name">
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.value }}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                    
                </v-col>
                
                <v-col
                    class="flex-grow-0 flex-shrink-0 px-2 mt-2 d-none d-md-block"
                    style="flex-basis: 236px"
                    cols="auto"
                >
                    <div class="title font-weight-regular">Gợi ý cho bạn</div>

                    <v-card
                        class="mx-auto mt-4 elevation-0"
                        v-for="(item,i) in suggestions.slice(0, 3)"
                        :key="i"
                        :to="item.href"
                    >
                        <v-img
                            :src="(item.attachments && item.attachments[0] && item.attachments[0].attachmentSource) ? item.attachments[0].attachmentSource : ''"
                            position="center center" aspect-ratio="1" style="width: 100%"
                        ></v-img>

                        <v-card-title class="subtitle-1">
                            {{ item.name }}
                        </v-card-title>

                        <v-card-subtitle>
                            <template>
                                {{ item.brand }}
                            </template>
                        </v-card-subtitle>
                    </v-card>

                </v-col>
            </v-row>

            <div class="py-4 d-md-none">
                <div class="title font-weight-regular text-center">Gợi ý cho bạn</div>
                <div class="mx-n6">
                    <v-slide-group
                        active-class="success"
                        show-arrows
                        center-active
                    >
                        <v-slide-item
                            v-for="(item,i) in suggestions"
                            :key="i"
                            v-slot:default="{ active, toggle }"
                        >
                            <v-card
                                class="mx-2 elevation-0"
                                width="180px"
                                :to="item.href"
                            >
                                <v-img
                                    :src="(item.attachments && item.attachments[0] && item.attachments[0].attachmentSource) ? item.attachments[0].attachmentSource : ''"
                                    position="center center" aspect-ratio="1" style="width: 100%"
                                ></v-img>

                                <v-card-title class="subtitle-1">
                                    {{ item.name }}
                                </v-card-title>

                                <v-card-subtitle>
                                    <template>
                                        {{ item.brand }}
                                    </template>
                                </v-card-subtitle>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </div>
            </div>
            
        </v-container>
        </div>
    `,
    data: function () {
        return {
            item: {
                "category": "house",
                "id": 1,
                "name": "Summit Building",
                "price": 1250000000,
                "description": "Samsung Galaxy S20",
                "brand": null,
                "status": null,
                "productYear": null,
                "carHopso": null,
                "origin": null,
                "color": null,
                "attachments": [
                    { attachmentSource: 'assets/images/bedroom56642211920.jpg' },
                    { attachmentSource: 'assets/images/guggenheimmuseum27072581920.jpg' },
                    { attachmentSource: 'assets/images/woman45787541920.jpg' },
                ]
            },
    
            banners: {
                active: 0
            },
    
            descriptionTable: [
                {
                    name: 'Màn hình',
                    value: '6.5 inch'
                },
                {
                    name: 'Thương hiệu',
                    value: 'Samsung'
                },
                {
                    name: 'Vi xử lý',
                    value: 'Exynos 9850'
                },
                {
                    name: 'Dung lượng pin',
                    value: '5.000 mAh'
                },
            ],
    
            suggestions: [
                {
                    name: 'Samsung Galaxy S20',
                    brand: 'Samsung',
                    href: '',
                    attachments: [
                        { attachmentSource: 'assets/images/guggenheimmuseum27072581920.jpg' }
                    ]
                },
                {
                    name: 'Apple Iphone 12',
                    brand: 'Apple',
                    href: '',
                    attachments: [
                        { attachmentSource: 'assets/images/woman45787541920.jpg' }
                    ]
                }
            ],
    
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        onChanged(item) {
            // console.log(item, this.$refs.bannerSlideGroup);
        },
    }
});

Vue.component('template-feature6', {
    template:  `
        <div class="template-feature6 py-6">
            <div class="container feature30" style="position: relative; max-width: 1140px;">
                <div class="row">
                    <div class="col-lg-10">
                        <!--<img src="assets/images/canal54882711920.jpg" class="rounded img-responsive" alt="wrappixel" />-->
                        <v-img src="assets/images/canal54882711920.jpg" class="rounded" contain />
                    </div>
                    <div class="col-lg-5 col-md-7 text-center wrap-feature30-box" style="position: absolute; top: 20%; right: 0px;">
                        <v-card style="box-shadow: rgba(115, 128, 157, 0.1) 0px 0px 30px;">
                            <div class="card-body pa-5">
                                <div class="pa-5">
                                    <span class="label label-info label-rounded">Feature</span>
                                    <h3 class="text-h5 my-5" style="color: rgb(62, 69, 85); font-family: Montserrat, sans-serif;">The New way of Making Your Website in mins</h3>
                                    <p style="color: rgb(141, 151, 173); font-weight: 300;">You can relay on our amazing features list and also our customer services will be great experience. You will love it for sure.</p>
                                    <button class="btn btn-info-gradiant btn-md btn-arrow px-12 py-3" href="#"><span>Explore More <i class="mdi mdi-arrow-right notranslate theme--dark text-h6"></i></span></button>
                                </div>
                            </div>
                        </v-card>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
            .template-feature6 .label {
                line-height: 13px;
                color: rgb(255, 255, 255);
                font-weight: 400;
                font-size: 75%;
                padding: 3px 15px;
                border-radius: 4px;
            }
            .template-feature6 .label-info {
                background-color: rgb(24, 142, 244);
            }
            .template-feature6 .label-rounded {
                border-radius: 60px;
            }

            .template-feature6 .btn {
                color: #ffffff;
                padding: 10px 25px;
                cursor: pointer;
                -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.14);
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.14);
                -webkit-transition: 0s;
                -o-transition: 0s;
                transition: 0s; 
            }
            .template-feature6 .btn:hover {
                color: #ffffff; 
            }
            .template-feature6 .btn:focus {
                -webkit-box-shadow: none;
                box-shadow: none; 
            }

            .template-feature6 .btn-arrow {
                position: relative; 
            }
            .template-feature6 .btn-arrow span {
                display: inline-block;
                position: relative;
                -webkit-transition: all 300ms ease-out;
                -o-transition: all 300ms ease-out;
                transition: all 300ms ease-out;
                will-change: transform; 
            }
            .template-feature6 .btn-arrow:hover span, .template-feature6 .btn-arrow:focus span {
                -webkit-transform: translate3d(-1rem, 0, 0);
                transform: translate3d(-1rem, 0, 0); 
            }
            .template-feature6 .btn-arrow i {
                position: absolute;
                width: 1.1em;
                right: 0px;
                right: 0rem;
                opacity: 0;
                top: 50%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                -webkit-transition: all 300ms ease-out;
                -o-transition: all 300ms ease-out;
                transition: all 300ms ease-out;
                will-change: right, opacity; 
            }
            .template-feature6 .btn-arrow:hover i, .template-feature6 .btn-arrow:focus i {
                opacity: 1;
                right: -2rem; 
            }

            .template-feature6 .btn-success-gradiant {
                background: #2cdd9b;
                background: -webkit-linear-gradient(legacy-direction(to right), #2cdd9b 0%, #1dc8cc 100%);
                background: -webkit-gradient(linear, left top, right top, from(#2cdd9b), to(#1dc8cc));
                background: -webkit-linear-gradient(left, #2cdd9b 0%, #1dc8cc 100%);
                background: -o-linear-gradient(left, #2cdd9b 0%, #1dc8cc 100%);
                background: linear-gradient(to right, #2cdd9b 0%, #1dc8cc 100%);
                border: 0px; 
            }
            .template-feature6 .btn-success-gradiant:hover {
                background: #1dc8cc;
                background: -webkit-linear-gradient(legacy-direction(to right), #1dc8cc 0%, #2cdd9b 100%);
                background: -webkit-gradient(linear, left top, right top, from(#1dc8cc), to(#2cdd9b));
                background: -webkit-linear-gradient(left, #1dc8cc 0%, #2cdd9b 100%);
                background: -o-linear-gradient(left, #1dc8cc 0%, #2cdd9b 100%);
                background: linear-gradient(to right, #1dc8cc 0%, #2cdd9b 100%); 
            }
            .template-feature6 .btn-success-gradiant.active, .template-feature6 .btn-success-gradiant:active, .template-feature6 .btn-success-gradiant:focus {
                -webkit-box-shadow: 0px;
                box-shadow: 0px;
                opacity: 1; 
            }
            
            .template-feature6 .btn-danger-gradiant {
                background: #ff4d7e;
                background: -webkit-linear-gradient(legacy-direction(to right), #ff4d7e 0%, #ff6a5b 100%);
                background: -webkit-gradient(linear, left top, right top, from(#ff4d7e), to(#ff6a5b));
                background: -webkit-linear-gradient(left, #ff4d7e 0%, #ff6a5b 100%);
                background: -o-linear-gradient(left, #ff4d7e 0%, #ff6a5b 100%);
                background: linear-gradient(to right, #ff4d7e 0%, #ff6a5b 100%);
                border: 0px; 
            }
            .template-feature6 .btn-danger-gradiant:hover {
                background: #ff6a5b;
                background: -webkit-linear-gradient(legacy-direction(to right), #ff6a5b 0%, #ff4d7e 100%);
                background: -webkit-gradient(linear, left top, right top, from(#ff6a5b), to(#ff4d7e));
                background: -webkit-linear-gradient(left, #ff6a5b 0%, #ff4d7e 100%);
                background: -o-linear-gradient(left, #ff6a5b 0%, #ff4d7e 100%);
                background: linear-gradient(to right, #ff6a5b 0%, #ff4d7e 100%); 
            }
            .template-feature6 .btn-danger-gradiant.active, .template-feature6 .btn-danger-gradiant:active, .template-feature6 .btn-danger-gradiant:focus {
                -webkit-box-shadow: 0px;
                box-shadow: 0px;
                opacity: 1; 
            }

            .template-feature6 .btn-info-gradiant {
                background: #188ef4;
                background: -webkit-linear-gradient(legacy-direction(to right), #188ef4 0%, #316ce8 100%);
                background: -webkit-gradient(linear, left top, right top, from(#188ef4), to(#316ce8));
                background: -webkit-linear-gradient(left, #188ef4 0%, #316ce8 100%);
                background: -o-linear-gradient(left, #188ef4 0%, #316ce8 100%);
                background: linear-gradient(to right, #188ef4 0%, #316ce8 100%);
                border: 0px; 
            }
            .template-feature6 .btn-info-gradiant:hover {
                background: #316ce8;
                background: -webkit-linear-gradient(legacy-direction(to right), #316ce8 0%, #188ef4 100%);
                background: -webkit-gradient(linear, left top, right top, from(#316ce8), to(#188ef4));
                background: -webkit-linear-gradient(left, #316ce8 0%, #188ef4 100%);
                background: -o-linear-gradient(left, #316ce8 0%, #188ef4 100%);
                background: linear-gradient(to right, #316ce8 0%, #188ef4 100%); 
            }
            .template-feature6 .btn-info-gradiant.active, .template-feature6 .btn-info-gradiant:active, .template-feature6 .btn-info-gradiant:focus {
                -webkit-box-shadow: 0px;
                box-shadow: 0px;
                opacity: 1; 
            }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-404page1', {
    template:  `
        <v-container
            class="text-center fill-height"
            style="height: calc(100vh - 58px);"
        >
            <v-row align="center">
                <v-col>
                    <h1 class="display-2 primary--text">
                    Whoops, 404
                    </h1>

                    <p>The page you were looking for does not exist</p>

                    <v-btn
                    to="#"
                    color="primary"
                    outlined
                    >
                    Get me out of here!
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    `,
    data: function () {
        return {
            
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});



Vue.component('template-playground1', {
    template:  `
    <v-container
        class="text-center fill-height"
        style="height: calc(100vh - 58px);"
    >
        
    </v-container>
    `,
    data: function () {
        return {
            
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});
