# 配置生成常用页面
常用页面，如：列表页、新增&编辑、详情页等通过配置可视化的生成

## 列表页
```html
<template>
  <div class="admin-enterprise-list">
    <temp-list :tempConf="tempConf" ref="enterTemp">
      <template slot="filter">
        <!-- 按钮自定义  -->
        <el-button  icon="el-icon-plus" type="primary" @click="onEdit()">新增企业</el-button>
        <el-button type="danger" @click="delEnterprise">删除</el-button>
      </template>

      <template slot-scope="helperData">
        <hm-pager-grid
          ref="pagerGrid"
          :border="false"
          row-key="tableComment"
          :data="helperData.tableList"
          :page="helperData.page"
          @selection-change="handleSelectionChange"
          @size-change="helperData.onSizeChange"
          @current-change="helperData.onPageChange">
          <!-- 表格列自定义 -->
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="企业名称"></el-table-column>
          <el-table-column label="操作" align="center" min-width="150px">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="onEdit(scope.row.id)" v-if="scope.row.status === 1000">编辑</el-button>
              <el-button size="mini" type="primary" @click="signAgree(scope.row)">签订协议</el-button>
            </template>
          </el-table-column>
        </hm-pager-grid>
      </template>
    </temp-list>
  </div>
</template>

<script>
import TempList from '@/visualize/template/list';
import tempConf from '@/visualize/data/admin_enterpriseList';

export default {
  name: 'enterpriseList',
  components: {
    TempList,
  },
  data () {
    return {
      tempConf,
    };
  },
  methods: {
  },
};
</script>
```

## 新增&编辑页
```html
<template>
  <div class="addmin-enterprise-edit">
    <temp-infoinput
      cols="2"
      :showAddBtn="false"
      :itemConf="pageConf"
      :editInitData="editInitData"
      @save-form="onSaveForm"
      :whileHandle="whileHandle"
      ref="enterpriseTemp"
    ></temp-infoinput>
  </div>
</template>

<script>
import TempInfoinput from '@/visualize/template/infoinput';
import merge from 'lodash/merge';
import pageConf from '@/visualize/data/infoinput_adminEMEnterpriseEdit';

export default {
  components: {
    TempInfoinput,
  },
  data () {
    return {
      pageConf,
    };
  },
  computed: {
    editInitData() {
      // 编辑模式下接口数据
      return this.respData;
    },
    dataUrl() {
      return this.qId ? '/service/companyinfo/update' : '/service/companyinfo/save';
    },
    whileHandle() {
      const vm = this;
      return {};
    },
  },
  methods: {
    onSaveForm(fromData) {
      const vm = this;
      const data = merge({}, this.respData, fromData);
      // 处理数据
    },
  },
};
</script>
```