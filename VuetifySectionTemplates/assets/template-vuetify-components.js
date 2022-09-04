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

Vue.component('template-avatars', {
    template:  `
        <v-container fluid>
            <v-row justify="center">
            <v-subheader>Today</v-subheader>

            <v-expansion-panels popout>
                <v-expansion-panel
                v-for="(message, i) in messages"
                :key="i"
                hide-actions
                >
                <v-expansion-panel-header>
                    <v-row
                    align="center"
                    class="spacer"
                    no-gutters
                    >
                    <v-col
                        cols="4"
                        sm="2"
                        md="1"
                    >
                        <v-avatar
                        size="36px"
                        >
                        <img
                            v-if="message.avatar"
                            alt="Avatar"
                            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                        >
                        <v-icon
                            v-else
                            :color="message.color"
                            v-text="message.icon"
                        ></v-icon>
                        </v-avatar>
                    </v-col>

                    <v-col
                        class="hidden-xs-only"
                        sm="5"
                        md="3"
                    >
                        <strong v-html="message.name"></strong>
                        <span
                        v-if="message.total"
                        class="grey--text"
                        >
                        &nbsp;({{ message.total }})
                        </span>
                    </v-col>

                    <v-col
                        class="text-no-wrap"
                        cols="5"
                        sm="3"
                    >
                        <v-chip
                        v-if="message.new"
                        :color="message.color + ' lighten-4'"
                        class="ml-0 mr-2 black--text"
                        label
                        small
                        >
                        {{ message.new }} new
                        </v-chip>
                        <strong v-html="message.title"></strong>
                    </v-col>

                    <v-col
                        v-if="message.excerpt"
                        class="grey--text text-truncate hidden-sm-and-down"
                    >
                        &mdash;
                        {{ message.excerpt }}
                    </v-col>
                    </v-row>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                    <v-divider></v-divider>
                    <v-card-text v-text="lorem"></v-card-text>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-row>
        </v-container>
    `,
    data: function () {
        return {
            messages: [
                {
                  avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                  name: 'John Leider',
                  title: 'Welcome to Vuetify!',
                  excerpt: 'Thank you for joining our community...',
                },
                {
                  color: 'red',
                  icon: 'mdi-account-multiple',
                  name: 'Social',
                  new: 1,
                  total: 3,
                  title: 'Twitter',
                },
                {
                  color: 'teal',
                  icon: 'mdi-tag',
                  name: 'Promos',
                  new: 2,
                  total: 4,
                  title: 'Shop your way',
                  exceprt: 'New deals available, Join Today',
                },
              ],
            lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
            
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


Vue.component('template-toolbar', {
    template:  `
        <v-card flat>
            <v-toolbar
            color="primary"
            dark
            extended
            flat
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-toolbar>

            <v-card
            class="mx-auto"
            max-width="700"
            style="margin-top: -64px;"
            >
            <v-toolbar flat>
                <v-toolbar-title class="grey--text">
                Title
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                <v-icon>mdi-apps</v-icon>
                </v-btn>

                <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-toolbar>

            <v-divider></v-divider>

            <v-card-text style="height: 200px;"></v-card-text>
            </v-card>
        </v-card>
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

Vue.component('template-button-fab', {
    template:  `
        <v-row>
            <v-col
            cols="12"
            sm="6"
            offset-sm="3"
            >
            <v-card>
                <v-toolbar
                color="light-blue"
                light
                extended
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title class="white--text">
                    My files
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-view-module</v-icon>
                </v-btn>
                <template v-slot:extension>
                    <v-btn
                    fab
                    color="cyan accent-2"
                    bottom
                    left
                    absolute
                    @click="dialog = !dialog"
                    >
                    <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                </v-toolbar>
                <v-list
                two-line
                subheader
                >
                <v-subheader inset>
                    Folders
                </v-subheader>

                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                >
                    <v-list-item-avatar>
                    <v-icon :class="[item.iconClass]">
                        {{ item.icon }}
                    </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>

                    <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">
                        mdi-information
                        </v-icon>
                    </v-btn>
                    </v-list-item-action>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-subheader inset>
                    Files
                </v-subheader>

                <v-list-item
                    v-for="item in items2"
                    :key="item.title"
                    link
                >
                    <v-list-item-avatar>
                    <v-icon :class="[item.iconClass]">
                        {{ item.icon }}
                    </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>

                    <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                    <v-btn
                        icon
                        ripple
                    >
                        <v-icon color="grey lighten-1">
                        mdi-information
                        </v-icon>
                    </v-btn>
                    </v-list-item-action>
                </v-list-item>
                </v-list>

                <v-dialog
                v-model="dialog"
                max-width="500px"
                >
                <v-card>
                    <v-card-text>
                    <v-text-field label="File name"></v-text-field>

                    <small class="grey--text">* This doesn't actually save.</small>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        text
                        color="primary"
                        @click="dialog = false"
                    >
                        Submit
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-card>
            </v-col>
        </v-row>
    `,
    data: function () {
        return {
            dialog: false,
            items: [
            { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
            { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
            { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' },
            ],
            items2: [
            { icon: 'mdi-clipboard-text', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
            { icon: 'mdi-gesture-tap-button', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
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

Vue.component('template-cards', {
    template:  `
        <v-container>
            <v-row justify="space-around">
            <v-card width="400">
                <v-img
                height="200px"
                src="assets/images/americawest46937311920.jpg"
                >
                <v-app-bar
                    flat
                    color="rgba(0, 0, 0, 0)"
                >
                    <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

                    <v-toolbar-title class="title white--text pl-0">
                    Messages
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn
                    color="white"
                    icon
                    >
                    <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-app-bar>

                <v-card-title class="white--text mt-8">
                    <v-avatar size="56">
                    <img
                        alt="user"
                        src="assets/images/logo.png"
                    >
                    </v-avatar>
                    <p class="ml-3">
                    John Doe
                    </p>
                </v-card-title>
                </v-img>

                <v-card-text>
                <div class="font-weight-bold ml-8 mb-2">
                    Today
                </div>

                <v-timeline
                    align-top
                    dense
                >
                    <v-timeline-item
                    v-for="message in messages"
                    :key="message.time"
                    :color="message.color"
                    small
                    >
                    <div>
                        <div class="font-weight-normal">
                        <strong>{{ message.from }}</strong> @{{ message.time }}
                        </div>
                        <div>{{ message.message }}</div>
                    </div>
                    </v-timeline-item>
                </v-timeline>
                </v-card-text>
            </v-card>
            </v-row>
        </v-container>
    `,
    data: function () {
        return {
            messages: [
                {
                  from: 'You',
                  message: `Sure, I'll see you later.`,
                  time: '10:42am',
                  color: 'deep-purple lighten-1',
                },
                {
                  from: 'John Doe',
                  message: 'Yeah, sure. Does 1:00pm work?',
                  time: '10:37am',
                  color: 'green',
                },
                {
                  from: 'You',
                  message: 'Did you still want to grab lunch today?',
                  time: '9:47am',
                  color: 'deep-purple lighten-1',
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

Vue.component('template-divider1', {
    template:  `
        <v-row justify="center">
            <v-col
            cols="12"
            sm="8"
            >
            <v-card>
                <v-card-title class="cyan darken-1">
                <span class="headline white--text">Sarah Mcbeal</span>

                <v-spacer></v-spacer>

                <v-btn
                    dark
                    icon
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>

                <v-btn
                    dark
                    icon
                >
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn
                    dark
                    icon
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-card-title>

                <v-list>
                <v-list-item>
                    <v-list-item-action>
                    <v-icon>mdi-phone</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>(650) 555-1234</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                    <v-icon>mdi-message-text</v-icon>
                    </v-list-item-action>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <v-list-item-action>
                    <v-icon>mdi-phone</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>(323) 555-6789</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                    <v-icon>mdi-message-text</v-icon>
                    </v-list-item-action>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <v-list-item-action>
                    <v-icon>mdi-email</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>mcbeal@example.com</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <v-list-item-action>
                    <v-icon>mdi-map-marker</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>Orlando, FL 79938</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list>

                <v-img
                src="https://picsum.photos/700?image=996"
                height="200px"
                ></v-img>
            </v-card>
            </v-col>
        </v-row>
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

Vue.component('template-divider2', {
    template:  `
        <v-row justify="center">
            <v-col
            cols="12"
            sm="8"
            md="6"
            >
            <v-card>
                <v-toolbar
                color="orange lighten-1"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Message Board</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                </v-toolbar>

                <v-list two-line>
                <template v-for="(item, index) in items">
                    <v-subheader
                    v-if="item.header"
                    :key="item.header"
                    inset
                    >
                    {{
                        item.header
                    }}
                    </v-subheader>

                    <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    inset
                    ></v-divider>

                    <v-list-item
                    v-else
                    :key="item.title"
                    ripple
                    >
                    <v-list-item-avatar>
                        <img :src="item.avatar">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle
                        v-html="item.subtitle"
                        ></v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </template>
                </v-list>
            </v-card>
            </v-col>
        </v-row>
    `,
    data: function () {
        return {
            items: [
                {
                  header: 'Today',
                },
                { divider: true },
                {
                  avatar: 'https://picsum.photos/250/300?image=660',
                  title: 'Meeting @ Noon',
                  subtitle:
                    `<span class="font-weight-bold">Spike Lee</span> &mdash; I'll be in your neighborhood`,
                },
                {
                  avatar: 'https://picsum.photos/250/300?image=821',
                  title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
                  subtitle:
                    '<span class="font-weight-bold">to Operations support</span> &mdash; Wish I could come.',
                },
                {
                  avatar: 'https://picsum.photos/250/300?image=783',
                  title: 'Yes yes',
                  subtitle:
                    '<span class="font-weight-bold">Bella</span> &mdash; Do you have Paris recommendations',
                },
                {
                  header: 'Yesterday',
                },
                { divider: true },
                {
                  avatar: 'https://picsum.photos/250/300?image=1006',
                  title: 'Dinner tonight?',
                  subtitle:
                    '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?',
                },
                {
                  avatar: 'https://picsum.photos/250/300?image=146',
                  title: 'So long',
                  subtitle:
                    '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?',
                },
                {
                  header: 'Last Week',
                },
                { divider: true },
                {
                  avatar: 'https://picsum.photos/250/300?image=1008',
                  title: 'Breakfast?',
                  subtitle:
                    '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?',
                },
                {
                  avatar: 'https://picsum.photos/250/300?image=839',
                  title:
                    'Winter Porridge <span class="grey--text text--lighten-1"></span>',
                  subtitle:
                    '<span class="font-weight-bold">cc: Daniel</span> &mdash; Tell me more...',
                },
                {
                  avatar: 'https://picsum.photos/250/300?image=145',
                  title: 'Oui oui',
                  subtitle:
                    '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?',
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

Vue.component('template-list1', {
    template:  `
        <v-card
            class="mx-auto"
            width="256"
            tile
        >
            <v-navigation-drawer permanent>
            <v-system-bar></v-system-bar>
            <v-list>
                <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="title">
                    John Leider
                    </v-list-item-title>
                    <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <v-icon>mdi-menu-down</v-icon>
                </v-list-item-action>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
                nav
                dense
            >
                <v-list-item-group
                v-model="selectedItem"
                color="primary"
                >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
            </v-navigation-drawer>
        </v-card>
    `,
    data: function () {
        return {
            selectedItem: 0,
            items: [
                { text: 'My Files', icon: 'mdi-folder' },
                { text: 'Shared with me', icon: 'mdi-account-multiple' },
                { text: 'Starred', icon: 'mdi-star' },
                { text: 'Recent', icon: 'mdi-history' },
                { text: 'Offline', icon: 'mdi-check-circle' },
                { text: 'Uploads', icon: 'mdi-upload' },
                { text: 'Backups', icon: 'mdi-cloud-upload' },
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

Vue.component('template-list2', {
    template:  `
        <v-card
            max-width="450"
            class="mx-auto"
        >
            <v-toolbar
            color="cyan"
            dark
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Inbox</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            </v-toolbar>

            <v-list three-line>
            <template v-for="(item, index) in items">
                <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
                ></v-subheader>

                <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
                ></v-divider>

                <v-list-item
                v-else
                :key="item.title"
                >
                <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </template>
            </v-list>
        </v-card>
    `,
    data: function () {
        return {
            items: [
                { header: 'Today' },
                {
                  avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                  title: 'Brunch this weekend?',
                  subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                },
                { divider: true, inset: true },
                {
                  avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                  title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                  subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                },
                { divider: true, inset: true },
                {
                  avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                  title: 'Oui oui',
                  subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
                },
                { divider: true, inset: true },
                {
                  avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                  title: 'Birthday gift',
                  subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
                },
                { divider: true, inset: true },
                {
                  avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                  title: 'Recipe to try',
                  subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
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

Vue.component('template-list3', {
    template:  `
        <v-card
            max-width="600"
            class="mx-auto"
        >
            <v-toolbar
            color="light-blue"
            dark
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>My files</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-view-module</v-icon>
            </v-btn>
            </v-toolbar>

            <v-list
            subheader
            two-line
            >
            <v-subheader inset>Folders</v-subheader>

            <v-list-item
                v-for="folder in folders"
                :key="folder.title"
            >
                <v-list-item-avatar>
                <v-icon
                    class="grey lighten-1"
                    dark
                >
                    mdi-folder
                </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title v-text="folder.title"></v-list-item-title>

                <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-subheader inset>Files</v-subheader>

            <v-list-item
                v-for="file in files"
                :key="file.title"
            >
                <v-list-item-avatar>
                <v-icon
                    :class="file.color"
                    dark
                    v-text="file.icon"
                ></v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title v-text="file.title"></v-list-item-title>

                <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
                </v-list-item-action>
            </v-list-item>
            </v-list>
        </v-card>
    `,
    data: function () {
        return {
            files: [
                {
                  color: 'blue',
                  icon: 'mdi-clipboard-text',
                  subtitle: 'Jan 20, 2014',
                  title: 'Vacation itinerary',
                },
                {
                  color: 'amber',
                  icon: 'mdi-gesture-tap-button',
                  subtitle: 'Jan 10, 2014',
                  title: 'Kitchen remodel',
                },
              ],
              folders: [
                {
                  subtitle: 'Jan 9, 2014',
                  title: 'Photos',
                },
                {
                  subtitle: 'Jan 17, 2014',
                  title: 'Recipes',
                },
                {
                  subtitle: 'Jan 28, 2014',
                  title: 'Work',
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

Vue.component('template-list4', {
    template:  `
        <v-card
            class="mx-auto"
            max-width="500"
        >
            <v-toolbar
            color="teal"
            dark
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Topics</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            </v-toolbar>

            <v-list>
            <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                no-action
            >
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                </template>

                <v-list-item
                v-for="child in item.items"
                :key="child.title"
                >
                <v-list-item-content>
                    <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
            </v-list>
        </v-card>
    `,
    data: function () {
        return {
            items: [
                {
                  action: 'mdi-ticket',
                  items: [{ title: 'List Item' }],
                  title: 'Attractions',
                },
                {
                  action: 'mdi-silverware-fork-knife',
                  active: true,
                  items: [
                    { title: 'Breakfast & brunch' },
                    { title: 'New American' },
                    { title: 'Sushi' },
                  ],
                  title: 'Dining',
                },
                {
                  action: 'mdi-school',
                  items: [{ title: 'List Item' }],
                  title: 'Education',
                },
                {
                  action: 'mdi-run',
                  items: [{ title: 'List Item' }],
                  title: 'Family',
                },
                {
                  action: 'mdi-bottle-tonic-plus',
                  items: [{ title: 'List Item' }],
                  title: 'Health',
                },
                {
                  action: 'mdi-content-cut',
                  items: [{ title: 'List Item' }],
                  title: 'Office',
                },
                {
                  action: 'mdi-tag',
                  items: [{ title: 'List Item' }],
                  title: 'Promotions',
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

Vue.component('template-list5', {
    template:  `
        <v-card
            class="mx-auto"
            max-width="400"
        >
            <v-toolbar
            color="purple"
            dark
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Settings</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            </v-toolbar>

            <v-list
            subheader
            three-line
            >
            <v-subheader>User Controls</v-subheader>

            <v-list-item>
                <v-list-item-content>
                <v-list-item-title>Content filtering</v-list-item-title>
                <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                <v-list-item-title>Password</v-list-item-title>
                <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list
            flat
            subheader
            three-line
            >
            <v-subheader>General</v-subheader>

            <v-list-item-group
                v-model="settings"
                multiple
                active-class=""
            >
                <v-list-item>
                <template v-slot:default="{ active }">
                    <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>Notifications</v-list-item-title>
                    <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                    </v-list-item-content>
                </template>
                </v-list-item>

                <v-list-item>
                <template v-slot:default="{ active }">
                    <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>Sound</v-list-item-title>
                    <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                    </v-list-item-content>
                </template>
                </v-list-item>

                <v-list-item>
                <template v-slot:default="{ active }">
                    <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>Auto-add widgets</v-list-item-title>
                    <v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
                    </v-list-item-content>
                </template>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-card>
    `,
    data: function () {
        return {
            settings: [],
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

Vue.component('template-list6', {
    template:  `
        <v-card
            class="mx-auto"
            max-width="500"
        >
            <v-toolbar
            color="pink"
            dark
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Inbox</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-btn>
            </v-toolbar>

            <v-list two-line>
            <v-list-item-group
                v-model="selected"
                active-class="pink--text"
                multiple
            >
                <template v-for="(item, index) in items">
                <v-list-item :key="item.title">
                    <template v-slot:default="{ active }">
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>

                        <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.headline"
                        ></v-list-item-subtitle>

                        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                        <v-icon
                        v-if="!active"
                        color="grey lighten-1"
                        >
                        mdi-star-outline
                        </v-icon>

                        <v-icon
                        v-else
                        color="yellow darken-3"
                        >
                        mdi-star
                        </v-icon>
                    </v-list-item-action>
                    </template>
                </v-list-item>

                <v-divider
                    v-if="index < items.length - 1"
                    :key="index"
                ></v-divider>
                </template>
            </v-list-item-group>
            </v-list>
        </v-card>
    `,
    data: function () {
        return {
            selected: [2],
            items: [
                {
                action: '15 min',
                headline: 'Brunch this weekend?',
                subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                title: 'Ali Connors',
                },
                {
                action: '2 hr',
                headline: 'Summer BBQ',
                subtitle: `Wish I could come, but I'm out of town this weekend.`,
                title: 'me, Scrott, Jennifer',
                },
                {
                action: '6 hr',
                headline: 'Oui oui',
                subtitle: 'Do you have Paris recommendations? Have you ever been?',
                title: 'Sandra Adams',
                },
                {
                action: '12 hr',
                headline: 'Birthday gift',
                subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
                title: 'Trevor Hansen',
                },
                {
                action: '18hr',
                headline: 'Recipe to try',
                subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                title: 'Britta Holt',
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

Vue.component('template-list7', {
    template:  `
        <v-card
            max-width="375"
            class="mx-auto"
        >
            <v-img
            src="https://cdn.vuetifyjs.com/images/lists/ali.png"
            height="300px"
            dark
            >
            <v-row class="fill-height">
                <v-card-title>
                <v-btn
                    dark
                    icon
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    dark
                    icon
                    class="mr-4"
                >
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn
                    dark
                    icon
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-card-title>

                <v-spacer></v-spacer>

                <v-card-title class="white--text pl-12 pt-12">
                <div class="display-1 pl-12 pt-12">
                    Ali Conners
                </div>
                </v-card-title>
            </v-row>
            </v-img>

            <v-list two-line>
            <v-list-item>
                <v-list-item-icon>
                <v-icon color="indigo">
                    mdi-phone
                </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title>(650) 555-1234</v-list-item-title>
                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
                </v-list-item-icon>
            </v-list-item>

            <v-list-item>
                <v-list-item-action></v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>(323) 555-6789</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
                </v-list-item-icon>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
                <v-list-item-icon>
                <v-icon color="indigo">
                    mdi-email
                </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title>aliconnors@example.com</v-list-item-title>
                <v-list-item-subtitle>Personal</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-action></v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>ali_connors@example.com</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
                <v-list-item-icon>
                <v-icon color="indigo">
                    mdi-map-marker
                </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title>1400 Main Street</v-list-item-title>
                <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-list>
        </v-card>
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

Vue.component('template-list8', {
    template:  `
        <v-card
            max-width="500"
            class="mx-auto"
        >
            <v-toolbar
            color="indigo"
            dark
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Inbox</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            </v-toolbar>
            <v-list>
            <v-list-item
                v-for="item in items"
                :key="item.title"
            >
                <v-list-item-icon>
                <v-icon
                    v-if="item.icon"
                    color="pink"
                >
                    mdi-star
                </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
            </v-list-item>
            </v-list>
        </v-card>
    `,
    data: function () {
        return {
            items: [
                { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
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

Vue.component('template-list9', {
    template:  `
        <v-card
            class="mx-auto"
            max-width="500"
        >
            <v-toolbar
            color="deep-purple accent-4"
            dark
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>New Chat</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            </v-toolbar>

            <v-list subheader>
            <v-subheader>Recent chat</v-subheader>

            <v-list-item
                v-for="chat in recent"
                :key="chat.title"
            >
                <v-list-item-avatar>
                <v-img
                    :src="chat.avatar"
                ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title v-text="chat.title"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon>
                <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
                    mdi-message-outline
                </v-icon>
                </v-list-item-icon>
            </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list subheader>
            <v-subheader>Previous chats</v-subheader>

            <v-list-item
                v-for="chat in previous"
                :key="chat.title"
            >
                <v-list-item-avatar>
                <v-img
                    :src="chat.avatar"
                ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title v-text="chat.title"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list>
        </v-card>
    `,
    data: function () {
        return {
            recent: [
                {
                  active: true,
                  avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                  title: 'Jason Oner',
                },
                {
                  active: true,
                  avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                  title: 'Mike Carlson',
                },
                {
                  avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                  title: 'Cindy Baker',
                },
                {
                  avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                  title: 'Ali Connors',
                },
              ],
              previous: [{
                title: 'Travis Howard',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            }],
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

Vue.component('template-navigation-drawer1', {
    template:  `
        <div class="ma-12 pa-12">
            <v-card>
            <v-navigation-drawer
                permanent
                expand-on-hover
            >
                <v-list>
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                    <v-list-item-title class="title">
                        Sandra Adams
                    </v-list-item-title>
                    <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list
                nav
                dense
                >
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-folder</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>My Files</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Shared with me</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-star</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Starred</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-navigation-drawer>
            </v-card>
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
        var innerHTML  = ``;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-navigation-drawer2', {
    template:  `
        <v-card
            class="mx-auto"
            height="300"
            width="330"
        >
            <v-navigation-drawer
            permanent
            width="100%"
            >
            <v-row
                class="fill-height"
                no-gutters
            >
                <v-navigation-drawer
                dark
                mini-variant
                mini-variant-width="56"
                permanent
                >
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-divider></v-divider>

                <v-list
                    dense
                    nav
                >
                    <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-navigation-drawer>

                <v-list class="grow">
                <v-list-item
                    v-for="link in links"
                    :key="link"
                    link
                >
                    <v-list-item-title v-text="link"></v-list-item-title>
                </v-list-item>
                </v-list>
            </v-row>
            </v-navigation-drawer>
        </v-card>
    `,
    data: function () {
        return {
            items: [
                { title: 'Home', icon: 'mdi-view-dashboard' },
                { title: 'About', icon: 'mdi-forum' },
              ],
              links: ['Home', 'Contacts', 'Settings'],
              mini: true,
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

Vue.component('template-overlay1', {
    template:  `
        <v-hover>
            <template v-slot:default="{ hover }">
            <v-card
                class="mx-auto"
                max-width="344"
            >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>

                <v-card-text>
                <h2 class="title primary--text">
                    Magento Forests
                </h2>
                Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                </v-card-text>

                <v-card-title>
                <v-rating
                    :value="4"
                    dense
                    color="orange"
                    background-color="orange"
                    hover
                    class="mr-2"
                ></v-rating>
                <span class="primary--text subtitle-2">64 Reviews</span>
                </v-card-title>

                <v-fade-transition>
                <v-overlay
                    v-if="hover"
                    absolute
                    color="#036358"
                >
                    <v-btn>See more info</v-btn>
                </v-overlay>
                </v-fade-transition>
            </v-card>
            </template>
        </v-hover>
    `,
    data: function () {
        return {
            overlay: false,
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

Vue.component('template-sparkline1', {
    template:  `
        <v-card
            class="template-sparkline1 mt-12 mx-auto"
            max-width="400"
        >
            <v-sheet
            class="v-sheet--offset mx-auto"
            color="cyan"
            elevation="12"
            max-width="calc(100% - 32px)"
            >
            <v-sparkline
                :labels="labels"
                :value="value"
                color="white"
                line-width="2"
                padding="16"
            ></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">
                User Registrations
            </div>
            <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon
                class="mr-2"
                small
            >
                mdi-clock
            </v-icon>
            <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
            </v-card-text>
        </v-card>
    `,
    data: function () {
        return {
            labels: [
                '12am',
                '3am',
                '6am',
                '9am',
                '12pm',
                '3pm',
                '6pm',
                '9pm',
              ],
              value: [
                200,
                675,
                410,
                390,
                310,
                460,
                250,
                240,
              ],
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        var innerHTML  = `
        .template-sparkline1 .v-sheet--offset {
            top: -24px;
            position: relative;
          }
        `;

        commonvuefns.onMounted(this.$el, {
            innerHTML: innerHTML
        });
    },
    methods: {
        
    }
});

Vue.component('template-subheader1', {
    template:  `
        <v-row>
            <v-col
            cols="12"
            sm="6"
            offset-sm="3"
            >
            <v-card>
                <v-toolbar
                    color="teal"
                    dark
                >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Manage</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-toolbar>

                <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item
                    v-if="item.action"
                    :key="item.title"
                    >
                    <v-list-item-action>
                        <v-icon>{{ item.action }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>

                    <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    ></v-divider>

                    <v-subheader
                    v-else-if="item.header"
                    :key="item.header"
                    >
                    {{ item.header }}
                    </v-subheader>
                </template>
                </v-list>
            </v-card>
            </v-col>
        </v-row>
    `,
    data: function () {
        return {
            items: [
                {
                  action: 'mdi-inbox-arrow-down',
                  title: 'Inbox',
                },
                {
                  action: 'mdi-send',
                  title: 'Sent',
                },
                {
                  action: 'mdi-delete',
                  title: 'Trash',
                },
                {
                  action: 'mdi-alert-octagon',
                  title: 'Spam',
                },
                { divider: true },
                { header: 'Labels' },
                {
                  action: 'mdi-label',
                  title: 'Family',
                },
                {
                  action: 'mdi-label',
                  title: 'Friends',
                },
                {
                  action: 'mdi-label',
                  title: 'Work',
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

Vue.component('template-subheader2', {
    template:  `
        <v-card
            flat
            tile
        >
            <v-toolbar
            color="cyan"
            dark
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Application</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            </v-toolbar>

            <v-container
            v-for="type in types"
            :key="type"
            class="grey lighten-4"
            fluid
            >
            <v-subheader>{{ type }}</v-subheader>

            <v-row>
                <v-spacer></v-spacer>
                <v-col
                v-for="card in cards"
                :key="card"
                cols="12"
                sm="6"
                md="4"
                >
                <v-card>
                    <v-img
                    :src="'https://picsum.photos/200/300?image=' + getImage()"
                    height="300px"
                    >
                    <span
                        class="headline white--text pl-4 pt-4 d-inline-block"
                        v-text="card"
                    ></span>
                    </v-img>

                    <v-card-actions class="white justify-center">
                    <v-btn
                        v-for="(social, i) in socials"
                        :key="i"
                        :color="social.color"
                        class="white--text"
                        fab
                        icon
                        small
                    >
                        <v-icon>{{ social.icon }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
            </v-container>
        </v-card>
    `,
    data: function () {
        return {
            types: ['Places to Be', 'Places to See'],
            cards: ['Good', 'Best', 'Finest'],
            socials: [
                {
                icon: 'mdi-facebook',
                color: 'indigo',
                },
                {
                icon: 'mdi-linkedin',
                color: 'cyan darken-1',
                },
                {
                icon: 'mdi-instagram',
                color: 'red lighten-3',
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
        getImage () {
            const min = 550
            const max = 560
    
            return Math.floor(Math.random() * (max - min + 1)) + min
        },
    }
});

Vue.component('template-bottom-sheets1', {
    template:  `
        <v-card tile>
            <v-progress-linear
            :value="50"
            class="my-0"
            height="3"
            ></v-progress-linear>

            <v-list>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title>The Walker</v-list-item-title>
                <v-list-item-subtitle>Fitz & The Trantrums</v-list-item-subtitle>
                </v-list-item-content>

                <v-spacer></v-spacer>

                <v-list-item-icon>
                <v-btn icon>
                    <v-icon>mdi-rewind</v-icon>
                </v-btn>
                </v-list-item-icon>

                <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
                <v-btn icon>
                    <v-icon>mdi-pause</v-icon>
                </v-btn>
                </v-list-item-icon>

                <v-list-item-icon
                class="ml-0"
                :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                >
                <v-btn icon>
                    <v-icon>mdi-fast-forward</v-icon>
                </v-btn>
                </v-list-item-icon>
            </v-list-item>
            </v-list>
        </v-card>
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

Vue.component('template-bottom-sheets2', {
    template:  `
        <div class="text-center">
            <v-bottom-sheet v-model="sheet">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="purple"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                Open In
                </v-btn>
            </template>
            <v-list>
                <v-subheader>Open in</v-subheader>
                <v-list-item
                v-for="tile in tiles"
                :key="tile.title"
                @click="sheet = false"
                >
                <v-list-item-avatar>
                    <v-avatar
                    size="32px"
                    tile
                    >
                    <img
                        :src="'https://cdn.vuetifyjs.com/images/bottom-sheets/'+tile.img"
                        :alt="tile.title"
                    >
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-title>{{ tile.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-bottom-sheet>
        </div>
    `,
    data: function () {
        return {
            sheet: false,
            tiles: [
                { img: 'keep.png', title: 'Keep' },
                { img: 'inbox.png', title: 'Inbox' },
                { img: 'hangouts.png', title: 'Hangouts' },
                { img: 'messenger.png', title: 'Messenger' },
                { img: 'google.png', title: 'Google+' },
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

Vue.component('template-cards2', {
    template:  `
        <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
        >
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>

            <v-img
            height="250"
            src="assets/images/americawest46937311920.jpg"
            ></v-img>

            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
                <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
                ></v-rating>

                <div class="grey--text ml-4">
                4.5 (413)
                </div>
            </v-row>

            <div class="my-4 subtitle-1">
                $ • Italian, Cafe
            </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Tonight's availability</v-card-title>

            <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
            </v-chip-group>
            </v-card-text>

            <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
                Reserve
            </v-btn>
            </v-card-actions>
        </v-card>
    `,
    data: function () {
        return {
            loading: false,
            selection: 1,
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
        reserve () {
            this.loading = true
    
            setTimeout(() => (this.loading = false), 2000)
        },
    }
});

Vue.component('template-cards3', {
    template:  `
        <v-card
            class="mx-auto"
            max-width="400"
        >
            <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="headline">
                San Francisco
                </v-list-item-title>
                <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

            <v-card-text>
            <v-row align="center">
                <v-col
                class="display-3"
                cols="6"
                >
                23&deg;C
                </v-col>
                <v-col cols="6">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                    alt="Sunny image"
                    width="92"
                ></v-img>
                </v-col>
            </v-row>
            </v-card-text>

            <v-list-item>
            <v-list-item-icon>
                <v-icon>mdi-send</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item>
            <v-list-item-icon>
                <v-icon>mdi-cloud-download</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>

            <v-slider
            v-model="time"
            :max="6"
            :tick-labels="labels"
            class="mx-4"
            ticks
            ></v-slider>

            <v-list class="transparent">
            <v-list-item
                v-for="item in forecast"
                :key="item.day"
            >
                <v-list-item-title>{{ item.day }}</v-list-item-title>

                <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-subtitle class="text-right">
                {{ item.temp }}
                </v-list-item-subtitle>
            </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-card-actions>
            <v-btn text>
                Full Report
            </v-btn>
            </v-card-actions>
        </v-card>
    `,
    data: function () {
        return {
            labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
            time: 0,
            forecast: [
                { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
                { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
                { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
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

