<template>
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <button @click="btnClick">按钮</button>
      <li>产品信息01</li>
      <li>产品信息02</li>
      <li>产品信息03</li>
      <li>产品信息04</li>
      <li>产品信息05</li>
      <li>产品信息06</li>
      <li>产品信息07</li>
      <li>产品信息08</li>
      <li>产品信息09</li>
      <li>产品信息10</li>
      <li>产品信息11</li>
      <li>产品信息12</li>
      <li>产品信息13</li>
      <li>产品信息14</li>
      <li>产品信息15</li>
      <li>产品信息16</li>
      <li>产品信息17</li>
      <li>产品信息18</li>
      <li>产品信息19</li>
      <li>产品信息20</li>
      <li>产品信息21</li>
      <li>产品信息22</li>
      <li>产品信息23</li>
      <li>产品信息24</li>
      <li>产品信息25</li>
      <li>产品信息26</li>
      <li>产品信息27</li>
      <li>产品信息28</li>
      <li>产品信息29</li>
      <li>产品信息30</li>
      <li>产品信息31</li>
      <li>产品信息32</li>
      <li>产品信息33</li>
      <li>产品信息34</li>
      <li>产品信息35</li>
      <li>产品信息36</li>
      <li>产品信息37</li>
      <li>产品信息38</li>
      <li>产品信息39</li>
      <li>产品信息40</li>
      <li>产品信息41</li>
      <li>产品信息42</li>
      <li>产品信息43</li>
      <li>产品信息44</li>
      <li>产品信息45</li>
      <li>产品信息46</li>
      <li>产品信息47</li>
      <li>产品信息48</li>
      <li>产品信息49</li>
      <li>产品信息50</li>
      <li>产品信息51</li>
      <li>产品信息52</li>
      <li>产品信息53</li>
      <li>产品信息54</li>
      <li>产品信息55</li>
      <li>产品信息56</li>
      <li>产品信息57</li>
      <li>产品信息58</li>
      <li>产品信息59</li>
      <li>产品信息60</li>
      <li>产品信息61</li>
      <li>产品信息62</li>
      <li>产品信息63</li>
      <li>产品信息64</li>
      <li>产品信息65</li>
      <li>产品信息66</li>
      <li>产品信息67</li>
      <li>产品信息68</li>
      <li>产品信息69</li>
      <li>产品信息70</li>
      <li>产品信息71</li>
      <li>产品信息72</li>
      <li>产品信息73</li>
      <li>产品信息74</li>
      <li>产品信息75</li>
      <li>产品信息76</li>
      <li>产品信息77</li>
      <li>产品信息78</li>
      <li>产品信息79</li>
      <li>产品信息80</li>
      <li>产品信息81</li>
      <li>产品信息82</li>
      <li>产品信息83</li>
      <li>产品信息84</li>
      <li>产品信息85</li>
      <li>产品信息86</li>
      <li>产品信息87</li>
      <li>产品信息88</li>
      <li>产品信息89</li>
      <li>产品信息90</li>
      <li>产品信息91</li>
      <li>产品信息92</li>
      <li>产品信息93</li>
      <li>产品信息94</li>
      <li>产品信息95</li>
      <li>产品信息96</li>
      <li>产品信息97</li>
      <li>产品信息98</li>
      <li>产品信息99</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Category',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // this.scroll = new BScroll(this.$refs.aaa,{})
    // this.scroll = new BScroll(document.querySelector('.wrapper'),{})
    this.scroll = new BScroll('.wrapper',{
      // 监听滚动
      // 0,1: 不侦测实时位置;
      // 2: 手指滚动侦测, 手指离开后的惯性滚动不侦测
      // 3: 只要是滚动都侦测
      probeType: 3,
      // 用于控制 div、span 之类元素的原生点击是否生效
      click: true,
      // 监听上拉加载更多
      pullUpLoad: true,
    }),
    this.scroll.on('scroll', (position) => {
      console.log(position);
    })
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多');

      // 2秒后 完成下拉加载更多
      setTimeout(() => {
        this.scroll.finishPullUp()
      }, 1000);
    })
  },
  methods: {
    btnClick() {
      console.log('btnClick');
    }
  },
}
</script>

<style scoped>
  .wrapper {
    height: 100vh;
    background-color: #f00;
    color: #fff;
    overflow: hidden;
  }
</style>