module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': [
      'error',
      {
        allow: ['tron'],
      },
    ],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'consistent-return': 'off',
    'react/jsx-props-no-spreading': [
      0,
      {
        exceptions: ['Image', 'img', 'SvgIcon'],
      },
    ],
    'no-plusplus': [
      1,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_embedded', '_links'],
      },
    ],
    camelcase: [
      'error',
      {
        allow: [
          'jwt_decode',
          'grant_type',
          'redirect_uri',
          'client_id',
          'refresh_token',
          'sender_role',
          'phone_number',
          'pt_br',
          '_id',
          'category_id',
          'short_answer',
          'ticket_id',
          'valid_to_exchange_refund_selected',
          'aguardando_cliente',
          'aguardando_atendimento',
          'sla_vencido',
          'sla_vence_hoje',
          'sla_vence_3_dias',
          'com_reclamacao',
          'com_mediacao',
          'motivo_assunto',
          'interacoes_chat',
          'protocolos_atendidos_dia',
          'protocolos_atendidos_horario',
          'satisfacao_media',
          'tempo_medio',
          'primeira_interacao',
          'n_atendimentos',
          'protocolos_atendidos_por_dia',
          'ultimas_10_avaliacoes',
          'abertos_no_periodo',
          'finalizados_no_periodo',
          'novos_geral',
          'sla_estourado_geral',
          'satisfacao_geral',
          'abertos_geral',
          'ticket_type',
          'em_atendimento_geral',
          'sla_estourado',
          'em_atendimento',
        ],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
