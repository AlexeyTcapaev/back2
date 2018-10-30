<template>
    <v-app>
      <v-content>
        <v-container>
            <v-layout>
                <v-text-field outline label="Поиск по товару" append-icon="search" v-model="search"></v-text-field>
            </v-layout>
            <v-layout justify-space-between wrap>
                <v-flex xs5 v-for="(prod,i) in filtredProducts" :key="i">
                <v-card>
                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{prod.title}}</h3>
                        <div>{{prod.desc}}</div>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-btn flat color="orange">{{prod.price}}</v-btn>
                    </v-card-actions>
                </v-card>
                </v-flex>
            </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>
<script>
export default {
  data: () => ({
    products: [],
    search: ""
  }),
  computed: {
    filtredProducts() {
      return this.products.filter(prod => {
        if (this.search === "" || this.search === " ") return true;
        if (prod.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
          return prod;
      });
    }
  },
  beforeCreate() {
    const init = this;
    axios.get("/api/products").then(resp => {
      init.products = resp.data;
    });
  }
};
</script>
<style scoped>
.v-card {
  margin: 5px 0;
}
</style>
